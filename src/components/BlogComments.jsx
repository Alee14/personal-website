import withMessages from './FetchMessages';
import BlogCommentsForm from "./BlogCommentsForm.jsx";
import { formatDate } from "../util";
import sanitizeHtml from "sanitize-html";

const BlogComments = ({ message, page, totalPages, handleNext, handlePrevious }) => (
    <div>
        {message.map((g) => (
            <article className="card">
                <h1>{g.author}</h1>
                <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(g.comment) }} />
                <small>{formatDate(g.created_at)}</small>
            </article>
        ))}
        {page > 1 && <button className="button margin" onClick={handlePrevious}>Previous</button>}
        {page < totalPages && <button className="button margin" onClick={handleNext}>Next</button>}
    </div>
);

export default withMessages(BlogComments, '/comments/:slug', BlogCommentsForm);
