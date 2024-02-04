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

        const messageHtml = marked(DOMPurify.sanitize(this.state.message));
        try {
            await createMessage({ ...this.state, message: messageHtml });

            this.setState({
                name: '',
                email: '',
                website: '',
                message: '',
                isMessageSent: true,
                errorMessage: ''
            });
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    render() {
        return (
            <div class="card">
                <form onSubmit={this.handleSubmit}>
                    <h2>Submit Message</h2>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required value={this.state.name}
                           onChange={this.handleChange}/>
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="hello@example.com (optional)" value={this.state.email}
                           onChange={this.handleChange}/>
                    <label>Your Website</label>
                    <input type="url" name="website" placeholder="https://example.com (optional)"
                           value={this.state.website} onChange={this.handleChange}/>
                    <label>Message (Supports Markdown)</label>
                    <textarea name="message" placeholder="Message" required value={this.state.message}
                              onChange={this.handleChange}></textarea>
                    <button type="submit">Send</button>
                </form>
                {this.state.isMessageSent && <p>Sent successfully!</p>}
            </div>
        );
    }
}

export default GuestbookForm;
