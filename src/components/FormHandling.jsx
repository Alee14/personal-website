import { Component } from 'preact';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const withFormHandling = (WrappedComponent, getApiUrl, initialState) => {
    return class extends Component {
        state = {
            ...initialState,
            isMessageSent: false,
            errorMessage: '',
            turnstileToken: ''
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
                        this.setState({ turnstileToken: token });
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
                const messageKey = this.state.comment !== undefined ? 'comment' : 'message';
                const messageHtml = marked(DOMPurify.sanitize(this.state[messageKey]));
                const { isMessageSent, errorMessage, ...messageData } = this.state; // Exclude isMessageSent and errorMessage from the data

                messageData[messageKey] = messageHtml;

                const response = await fetch(getApiUrl(this.props), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(messageData),
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
                    ...initialState,
                    isMessageSent: true,
                    errorMessage: '',
                    [messageKey === 'comment' ? 'commentId' : 'messageId']: responseBody.id,
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
                <WrappedComponent
                    {...this.props}
                    state={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            );
        }
    };
};

export default withFormHandling;
