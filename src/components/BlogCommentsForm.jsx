import { h } from 'preact';
import withFormHandling from './FormHandling';
import '../styles/Form.css';

const BlogCommentsForm = ({ state, handleChange, handleSubmit }) => (
    <div className="card">
        <form onSubmit={handleSubmit}>
            <h2>Submit Comment</h2>
            <label htmlFor="author">Author *</label>
            <input type="text" name="author" placeholder="John Doe" required value={state.author} onChange={handleChange} disabled={state.isMessageSent}/>
            <label htmlFor="comment">Comment * (Supports <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">Markdown</a>)</label>
            <textarea name="comment" placeholder="Enter your comment here." required value={state.comment}
                      onChange={handleChange} disabled={state.isMessageSent}></textarea>
            <div id="turnstile-container"></div>
            <button className="button" type="submit" disabled={state.isMessageSent}>Send</button>
        </form>
        {state.errorMessage && <p dangerouslySetInnerHTML={{__html: state.errorMessage}}/>}
        {state.isMessageSent && !state.errorMessage &&
            <div>
                <p>Sent successfully!</p>
                <p>(Optional)</p>
                <p>Save this message ID: {state.commentId}</p>
                <p>Then send it to me, to verify that you sent this comment.</p>
                <p><a href="mailto:andrew@alee14.me">Email me</a> or tag/message me on these <a href="/contacts">platforms</a>.</p>
            </div>
        }
    </div>
);

const getBlogCommentsApiUrl = (props) => `${import.meta.env.PUBLIC_API_URL}/comments/${props.slug}`;

export default withFormHandling(BlogCommentsForm, getBlogCommentsApiUrl, {
    author: '',
    comment: '',
    commentId: ''
});
