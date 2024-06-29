import { Component } from 'preact';
import '../styles/Form.css';
import { marked } from "marked";
import DOMPurify from 'dompurify';

class BlogCommentsForm extends Component {
    state = {
        author: '',
        comment: '',
        isMessageSent: false,
        commentId: ''
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
                errorMessage: 'You have already sent a comment.',
            });
            return;
        }

        try {
            const messageHtml = marked(DOMPurify.sanitize(this.state.comment));
            const { isMessageSent, errorMessage, ...messageData } = this.state; // Exclude isMessageSent from the data

            const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/comments/${this.props.slug}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...messageData, comment: messageHtml }),
            });

            if (!response.ok) {
                const errorBody = await response.json();
                const errorMessage = `HTTP Error ${response.status}: ${response.statusText}<br>${errorBody.message}`;

                this.setState({
                    errorMessage: `There was an error submitting your comment.<br>Details:<br>${errorMessage}`,
                    isMessageSent: false,
                });
                return;
            }

            const responseBody = await response.json();

            this.setState({
                author: '',
                comment: '',
                isMessageSent: true,
                errorMessage: '',
                commentId: responseBody.id,
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
                    <h2>Submit Comment</h2>
                    <label htmlFor="author">Author *</label>
                    <input type="text" name="author" placeholder="John Doe" required value={this.state.author} onChange={this.handleChange} disabled={this.state.isMessageSent}/>
                    <label htmlFor="comment">Comment * (Supports <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Markdown</a>)</label>
                    <textarea name="comment" placeholder="Enter your comment here." required value={this.state.comment}
                              onChange={this.handleChange} disabled={this.state.isMessageSent}></textarea>
                    <div id="turnstile-container"></div>
                    <button class="button" type="submit" disabled={this.state.isMessageSent}>Send</button>
                </form>
                {this.state.errorMessage && <p dangerouslySetInnerHTML={{__html: this.state.errorMessage}}/>}
                {this.state.isMessageSent && !this.state.errorMessage &&
                    <div>
                        <p>Sent successfully!</p>
                        <p>(Optional)</p>
                        <p>Save this message ID: {this.state.commentId}</p>
                        <p>Then send it to me, to verify that you sent this comment.</p>
                        <p><a href="mailto:andrew@alee14.me">Email me</a> or tag/message me on these <a href="/contacts">platforms</a>.</p>
                    </div>
                }
            </div>
        );
    }
}

export default BlogCommentsForm;
