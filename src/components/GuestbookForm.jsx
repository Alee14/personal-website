import { Component } from 'preact';
import '../styles/Form.css';
import { marked } from "marked";
import DOMPurify from 'dompurify';

class GuestbookForm extends Component {
    state = {
        name: '',
        website: '',
        message: '',
        isMessageSent: false,
        messageId: ''
    };

    componentDidMount() {
        // Ensure the Turnstile script is loaded with explicit rendering
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onloadTurnstileCallback';
        script.defer = true;
        document.body.appendChild(script);

        // Callback function to handle Turnstile token
        window.onloadTurnstileCallback = () => {
            window.turnstile.render('#turnstile-container', {
                sitekey: '0x4AAAAAAAdb4uvxFFzNEDxB',
                callback: (token) => {
                    // Here you can handle the token, e.g., by storing it in a hidden form field
                    this.setState({turnstileToken: token});
                },
            });
        };

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }

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

        try {
            const messageHtml = marked(DOMPurify.sanitize(this.state.message));
            const { isMessageSent, errorMessage, ...messageData } = this.state; // Exclude isMessageSent from the data

            const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/guestbook`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...messageData, message: messageHtml }),
            });

            if (!response.ok) {
                const errorBody = await response.json();
                const errorMessage = `HTTP Error ${response.status}: ${response.statusText}<br>${errorBody.message}`;

                this.setState({
                    errorMessage: `There was an error submitting your message.<br>Details:<br>${errorMessage}`,
                    isMessageSent: false,
                });
                return;
            }

            const responseBody = await response.json();

            this.setState({
                name: '',
                website: '',
                message: '',
                isMessageSent: true,
                errorMessage: '',
                messageId: responseBody.id,
            });

            if (this.props.onMessageSent) {
                this.props.onMessageSent();
            }
        } catch (error) {
            this.setState({
                errorMessage: `There was an error submitting your message.<br>Details:<br>${error.message}<br>Check the console for more details.`,
                isMessageSent: false,
            });
        }
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <h2>Submit Message</h2>
                    <label htmlFor="name">Name *</label>
                    <input type="text" name="name" placeholder="John Doe" required value={this.state.name} onChange={this.handleChange} disabled={this.state.isMessageSent}/>
                    <label htmlFor="website">Your Website (Optional)</label>
                    <input type="url" name="website" placeholder="https://example.com" value={this.state.website} onChange={this.handleChange} disabled={this.state.isMessageSent}/>
                    <label htmlFor="message">Message * (Supports <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Markdown</a>)</label>
                    <textarea name="message" placeholder="Enter your message here." required value={this.state.message}
                              onChange={this.handleChange} disabled={this.state.isMessageSent}></textarea>
                    <div id="turnstile-container"></div>
                    <button class="button" type="submit" disabled={this.state.isMessageSent}>Send</button>
                </form>
                {this.state.errorMessage && <p dangerouslySetInnerHTML={{__html: this.state.errorMessage}}/>}
                {this.state.isMessageSent && !this.state.errorMessage &&
                    <div>
                        <p>Sent successfully!</p>
                        <p>(Optional)</p>
                        <p>Save this message ID: {this.state.messageId}</p>
                        <p>Then send it to me, to verify that you sent this message.</p>
                        <p><a href="mailto:andrew@alee14.me">Email me</a> or tag/message me on these <a href="/contacts">platforms</a>.</p>
                    </div>
                }
            </div>
        );
    }
}

export default GuestbookForm;
