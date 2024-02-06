import { h, Component } from 'preact';
import { pb } from '../services/pocketbase';
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

        try {
            const result = await pb.collection('guestbook').getList(page, perPage, {
                sort: '-created',
            });
            this.setState({
                message: result.items,
                totalPages: result.totalPages
            });
        } catch (error) {
            this.setState({ error: `Failed to fetch data: ${error.message}` });
            console.error('Failed to fetch data:', error);
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
                                <small>{formatDate(g.created)}</small>
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
