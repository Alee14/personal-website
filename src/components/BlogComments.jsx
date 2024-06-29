import { Component } from 'preact';
import { formatDate } from "../util";
import sanitizeHtml from 'sanitize-html';
import BlogCommentsForm from "./BlogCommentsForm.jsx";

class BlogComments extends Component {
    state = {
        message: null,
        error: null,
        page: 1,
    };

    fetchMessages = async (page) => {
        try {
            const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/comments/${this.props.slug}?page=${page}`);

            if (!response.ok) {
                const errorData = await response.json();
                this.setState({ error: errorData.message });
                console.error('Failed to fetch data:', errorData.message);
                return;
            }

            const { messages, totalPages } = await response.json();

            this.setState({
                message: messages,
                totalPages: totalPages,
                error: null // clear any previous error
            });

        } catch (error) {
            this.setState({ error: `${error.message}` });
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
                <BlogCommentsForm onMessageSent={this.refresh} slug={this.props.slug} />
                {error ? (
                    <p>{error}</p>
                ) : message ? (
                    <div>
                        {message.map((g) => (
                            <article className="card">
                                <h1>{g.author}</h1>
                                <div dangerouslySetInnerHTML={{__html: sanitizeHtml(g.comment)}}/>
                                <small>{formatDate(g.created_at)}</small>
                            </article>
                        ))}
                        {page > 1 && <button class="button margin" onClick={this.handlePrevious}>Previous</button>}
                        {page < totalPages && <button class="button margin" onClick={this.handleNext}>Next</button>}
                    </div>
                ) : (
                    <p>Loading comments...</p>
                )}
            </div>
        );
    }
}

export default BlogComments;
