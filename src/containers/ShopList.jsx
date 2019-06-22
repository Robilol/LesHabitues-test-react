import React from 'react'

const APIURL = 'https://www.leshabitues.fr/testapi/shops';

export default class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(APIURL)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                this.setState({
                    data: data.results,
                    isLoading: false
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <p>Bla</p>
        );
    }
}