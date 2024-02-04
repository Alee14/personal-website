import { h, Component } from 'preact';
import { pb } from '../services/pocketbase';
import { formatDate } from "../util";

class Guestbook extends Component {
    state = {
        message: null,
        error: null
    };

    async componentDidMount() {
        try {
            const message = await pb.collection('guestbook').getFullList({
                sort: '-created',
            });
            this.setState({ message });
        } catch (error) {
            this.setState({ error: `Failed to fetch data: ${error.message}` });
            console.error('Failed to fetch data:', error);
        }
    }

    render() {
        const { message, error } = this.state;

        if (error) {
            return <p>{error}</p>;
        }

        if (!message) {
            return <p>Loading messages...</p>;
        }

        return (
            <div>
                {message.map((g) => (
                    <article class="card">
                        <h1>Message from: {g.name}</h1>
                        <small>{formatDate(g.created)}</small>
                        <p>{g.message}</p>
                        {g.website && <a href={g.website}>Website</a>}
                    </article>
                ))}
            </div>
        );
    }
}

export default Guestbook;
