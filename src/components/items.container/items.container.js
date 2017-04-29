require('./items.container.scss');
import React from 'react';
import ReactDOM from 'react-dom';

import ItemCard from './item.card/item.card.js'


export default class ItemsContainer extends React.Component {
    render() {
        return (
            <section className="box-wrapper">
                <header className="section group header-container">
                    <div className="col span_3_of_4">
                        <h1>48 productos</h1>
                    </div>
                    <div className="col span_1_of_4 action-buttons-container">
                        <div className="pagination-icons">
                            <i className="material-icons base-state">keyboard_arrow_up</i>
                            <i className="material-icons base-state">keyboard_arrow_down</i>
                        </div>
                        <div className="cart-bag-icon">
                            <i className="material-icons base-state">local_mall</i>
                        </div>
                    </div>

                </header>
                <div className="section group items-container">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </section>
        )
    }
}