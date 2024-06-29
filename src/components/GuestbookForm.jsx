import { h } from 'preact';
import withFormHandling from './FormHandling';
import '../styles/Form.css';

const GuestbookForm = ({ state, handleChange, handleSubmit }) => (
    <div className="card">
        <form onSubmit={handleSubmit}>
            <h2>Submit Message</h2>
            <label htmlFor="name">Name *</label>
            <input type="text" name="name" placeholder="John Doe" required value={state.name} onChange={handleChange} disabled={state.isMessageSent}/>
            <label htmlFor="website">Your Website (Optional)</label>
            <input type="url" name="website" placeholder="https://example.com" value={state.website} onChange={handleChange} disabled={state.isMessageSent}/>
            <label htmlFor="message">Message * (Supports <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Markdown</a>)</label>
            <textarea name="message" placeholder="Enter your message here." required value={state.message}
                      onChange={handleChange} disabled={state.isMessageSent}></textarea>
            <div id="turnstile-container"></div>
            <button className="button" type="submit" disabled={state.isMessageSent}>Send</button>
        </form>
        {state.errorMessage && <p dangerouslySetInnerHTML={{__html: state.errorMessage}}/>}
        {state.isMessageSent && !state.errorMessage &&
            <div>
                <p>Sent successfully!</p>
                <p>(Optional)</p>
                <p>Save this message ID: {state.messageId}</p>
                <p>Then send it to me, to verify that you sent this message.</p>
                <p><a href="mailto:andrew@alee14.me">Email me</a> or tag/message me on these <a href="/contacts">platforms</a>.</p>
            </div>
        }
    </div>
);

const getGuestbookApiUrl = () => `${import.meta.env.PUBLIC_API_URL}/guestbook`;

export default withFormHandling(GuestbookForm, getGuestbookApiUrl, {
    name: '',
    website: '',
    message: '',
    messageId: ''
});
