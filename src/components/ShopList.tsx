import React from 'react'
import Shop from "../components/Shop";

const APIURL = 'https://www.leshabitues.fr/testapi/shops';

interface IState {
    data: [],
    isLoading: boolean,
    error: any
}

export default class ShopList extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({isLoading: true});

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
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        const {data, isLoading, error} = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <ul className="shop-list">
                {data.map(shop => {
                        const {name, address, logo, currency, id, zipcode, maxoffer, city} = shop;
                        return (
                            <li key={id}>
                                <Shop logo={logo} name={name} address={address} city={city}
                                      zipCode={zipcode} currency={currency} maxOffer={maxoffer}/>
                            </li>
                        )
                    }
                )}
            </ul>
        );
    }
}