import { h, Component } from 'preact';
import { supabase } from '../services/supabase';
import { formatDate } from "../util";
import sanitizeHtml from 'sanitize-html';
import GuestbookForm from "./GuestbookForm.jsx";

class Guestbook extends Component {
    state = {
        message: null,
        error: null,
        page: 1,
    };

    fetchMessages = async (page) => {
        const perPage = 10;
        const start = (page - 1) * perPage;
        const end = start + perPage - 1;

        let { data: messages, error, count } = await supabase
            .from('guestbook')
            .select('*', { count: 'exact' })
            .range(start, end)
            .order('created_at', { ascending: false });
        if (error) {
            this.setState({ error: `Failed to fetch data: ${error.message}` });
            console.error('Failed to fetch data:', error);
        } else {
            this.setState({
                message: messages,
                totalPages: Math.ceil(count / perPage)
            });
        }
    }

    refresh = async () => {
        await this.fetchMessages(this.state.page);
    }

    async componentDidMount() {
        await this.fetchMessages(this.state.page);
    }

    handleNext = async () => {
        const nextPage = this.state.page + 1;
        if (nextPage > this.state.totalPages) {
            return;
        }
        this.setState({ page: nextPage });
        await this.fetchMessages(nextPage);
    }

    handlePrevious = async () => {
        const previousPage = this.state.page - 1;
        this.setState({ page: previousPage });
        await this.fetchMessages(previousPage);
    }

    render() {
        const { message, error, page, totalPages } = this.state;

        return (
            <div>
                <GuestbookForm onMessageSent={this.refresh} />
                {error ? (
                    <p>{error}</p>
                ) : !message ? (
                    <p>Loading messages...</p>
                ) : (
                    <div class="grid">
                        {message.map((g) => (
                            <article class="card">
                                <h1>Message from: {g.name}</h1>
                                <small>{formatDate(g.created_at)}</small>
                                <div dangerouslySetInnerHTML={{__html: sanitizeHtml(g.message)}}/>
                                {g.website && <a href={g.website} target="_blank">Website</a>}
                            </article>
                        ))}
                    </div>
                )}
                {page > 1 && <button class="button margin" onClick={this.handlePrevious}>Previous</button>}
                {page < totalPages && <button class="button margin" onClick={this.handleNext}>Next</button>}
            </div>
        );
    }
}

export default Guestbook;
