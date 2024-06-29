import withMessages from './FetchMessages';
import GuestbookForm from "./GuestbookForm.jsx";
import { formatDate } from "../util";
import sanitizeHtml from "sanitize-html";

const Guestbook = ({ message, page, totalPages, handleNext, handlePrevious }) => (
    <div>
        <div className="grid">
            {message.map((g) => (
                <article className="card">
                    <h1>Message from: {g.name}</h1>
                    <small>{formatDate(g.created_at)}</small>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(g.message) }} />
                    {g.website && <a href={g.website} target="_blank">My Website</a>}
                </article>
            ))}
        </div>
        {page > 1 && <button className="button margin" onClick={handlePrevious}>Previous</button>}
        {page < totalPages && <button className="button margin" onClick={handleNext}>Next</button>}
    </div>
);

export default withMessages(Guestbook, '/guestbook', GuestbookForm);
