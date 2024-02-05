import { h, Component } from 'preact';
import { createMessage } from '../services/GuestbookService';
import '../styles/GuestbookForm.css';
import { marked } from "marked";
import DOMPurify from 'dompurify';

class GuestbookForm extends Component {
    state = {
        name: '',
        website: '',
        message: '',
        isMessageSent: false,
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        if (this.state.isMessageSent) {
            this.setState({
                errorMessage: 'You have already sent a message.',
            });
            return;
        }

        const urlRegex = /(https?:\/\/\S+)/g;
        const imageRegex = /!\[.*]\(.*\)/g;

        if (urlRegex.test(this.state.message) || imageRegex.test(this.state.message)) {
            this.setState({
                errorMessage: 'Links and images are not allowed.',
            });
            return;
        }

        try {
            const messageHtml = marked(DOMPurify.sanitize(this.state.message));
            await createMessage({ ...this.state, message: messageHtml });

            this.setState({
                name: '',
                website: '',
                message: '',
                isMessageSent: true,
                errorMessage: '',
            });

            if (this.props.onMessageSent) {
                this.props.onMessageSent();
            }
        } catch (error) {
            this.setState({
                errorMessage: `There was an error submitting your message.<br>Details: ${error}<br>Check the console for more details.`,
                isMessageSent: false,
            });
        }
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <h2>Submit Message</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="John Doe" required value={this.state.name} onChange={this.handleChange} disabled={this.state.isMessageSent}/>
                    <label htmlFor="website">Your Website (Optional)</label>
                    <input type="url" name="website" placeholder="https://example.com" value={this.state.website} onChange={this.handleChange} disabled={this.state.isMessageSent}/>
                    <label htmlFor="message">Message (Supports <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Markdown</a>)</label>
                    <textarea name="message" placeholder="Enter your message here." required value={this.state.message}
                              onChange={this.handleChange} disabled={this.state.isMessageSent}></textarea>
                    <button type="submit" disabled={this.state.isMessageSent}>Send</button>
                </form>
                {this.state.errorMessage && <p dangerouslySetInnerHTML={{__html: this.state.errorMessage}}/>}
                {this.state.isMessageSent && !this.state.errorMessage && <p>Sent successfully!</p>}
            </div>
        );
    }
}

export default GuestbookForm;
