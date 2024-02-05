import { h, Component } from 'preact';
import { createMessage } from '../services/GuestbookService';
import '../styles/GuestbookForm.css';
import { marked } from "marked";
import DOMPurify from 'dompurify';

class GuestbookForm extends Component {
    state = {
        name: '',
        email: '',
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
            return;
        }

        try {
            const messageHtml = marked(DOMPurify.sanitize(this.state.message));
            await createMessage({ ...this.state, message: messageHtml });

            this.setState({
                name: '',
                email: '',
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
            <div class="card">
                <form onSubmit={this.handleSubmit}>
                    <h2>Submit Message</h2>
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="John Doe" required value={this.state.name}
                           onChange={this.handleChange}/>
                    <label for="email">Email Address</label>
                    <input type="email" name="email" placeholder="hello@example.com (optional)" value={this.state.email}
                           onChange={this.handleChange}/>
                    <label for="website">Your Website</label>
                    <input type="url" name="website" placeholder="https://example.com (optional)"
                           value={this.state.website} onChange={this.handleChange}/>
                    <label for="message">Message (Supports Markdown)</label>
                    <textarea name="message" placeholder="This is a **message**. I can *do* this, and __this__." required value={this.state.message}
                              onChange={this.handleChange}></textarea>
                    <button type="submit">Send</button>
                </form>
                {this.state.errorMessage && <p dangerouslySetInnerHTML={{ __html: this.state.errorMessage }} />}
                {this.state.isMessageSent && <p>Sent successfully!</p>}
            </div>
        );
    }
}

export default GuestbookForm;
