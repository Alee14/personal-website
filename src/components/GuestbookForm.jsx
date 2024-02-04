import { h, Component } from 'preact';
import { createMessage } from '../services/GuestbookService';

class GuestbookForm extends Component {
    state = {
        name: '',
        email: '',
        website: '',
        message: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await createMessage(this.state);
        this.setState({
            name: '',
            email: '',
            website: '',
            message: ''
        });
    }

    render() {
        return (
            <form class="card" onSubmit={this.handleSubmit}>
                <h2>Submit Message</h2>
                <label>
                    Name<br />
                    <input type="text" name="name" placeholder="Name" required value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Email Address<br />
                    <input type="email" name="email" placeholder="Email Address (optional)" value={this.state.email} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Your Website<br />
                    <input type="url" name="website" placeholder="https://example.com (optional)" value={this.state.website} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Message<br />
                    <textarea name="message" placeholder="Message (Up to 1000 characters)" required value={this.state.message} onChange={this.handleChange}></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default GuestbookForm;
