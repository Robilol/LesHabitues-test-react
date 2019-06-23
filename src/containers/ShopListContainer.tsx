import React from 'react'
import ShopList from "../components/ShopList";

export default class ShopListContainer extends React.Component {
    private shopList: React.RefObject<ShopList>;

    constructor(props: any) {
        super(props);
        this.shopList = React.createRef();
    }

    onClick = () => {
        this.shopList.current!.fetchData();
    };

    render() {
        return (
            <div>
                <button className="refresh-button" onClick={this.onClick}>Refresh</button>
                <ShopList ref={this.shopList}/>
            </div>
        );
    }
}