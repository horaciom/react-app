require('./items.container.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import ItemCard from './item.card/item.card.js'

export default class ItemsContainer extends React.Component {

    render() {
        const user = this.props.user;
        const items = this.props.items
        let result = [];
        const cantOfItems = items.length;
        items.forEach((obj) => {
            result.push(<ItemCard data={obj} key={obj.id} user={user}/>);
        })
        return (
            <section className="box-wrapper">
                <header className="row header-container">
                    <div className="col-xs-6 col-sm-8 col-md-8 col-lg-8">
                        <h1>{cantOfItems} productos</h1>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 action-buttons-container">
                        <div className="pagination-icons">
                            <i className="material-icons base-state">keyboard_arrow_up</i>
                            <i className="material-icons base-state">keyboard_arrow_down</i>
                        </div>
                        <div className="cart-bag-icon">
                            <i className="material-icons base-state">local_mall</i>
                        </div>
                    </div>

                </header>

                <div className="row items-container">
                    <ul>
                        {result}
                    </ul>
                </div>
            </section>
        )
    }
}