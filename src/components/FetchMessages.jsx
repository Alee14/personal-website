import { Component } from 'preact';

const withMessages = (WrappedComponent, apiEndpoint, FormComponent) => {
    return class extends Component {
        state = {
            message: null,
            error: null,
            page: 1,
        };

        fetchMessages = async (page) => {
            try {
                const { slug } = this.props;
                const response = await fetch(`${import.meta.env.PUBLIC_API_URL}${apiEndpoint.replace(':slug', slug)}?page=${page}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    this.setState({ error: errorData.message });
                    console.error(errorData.message);
                    return;
                }

                const { messages, totalPages } = await response.json();

                this.setState({
                    message: messages,
                    totalPages: totalPages,
                    error: null // clear any previous error
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
                    <FormComponent onMessageSent={this.refresh} {...this.props} />
                    {error ? (
                        <p>{error}</p>
                    ) : message ? (
                        <WrappedComponent
                            message={message}
                            page={page}
                            totalPages={totalPages}
                            handleNext={this.handleNext}
                            handlePrevious={this.handlePrevious}
                            {...this.props}
                        />
                    ) : (
                        <p>Loading messages...</p>
                    )}
                </div>
            );
        }
    };
}

export default withMessages;
