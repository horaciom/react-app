require('./items.container.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import ItemCard from './item.card/item.card.js'
import Pagination from './pagination/pagination.js'
import CheckoutBtn from './checkout/checkout.btn.js'


export default class ItemsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.setPagination = this.setPagination.bind(this);
        this.setCoins = this.setCoins.bind(this);
        this.state = { pagValue: 0, limitHeight: 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.coins) this.setState({ coins: nextProps.coins });
    }

    setCoins(coins){
        this.props.setCoins(coins);
        this.setState({ coins: coins});
    }

    setPagination(val) {
        this.setState({
            pagValue: this.state.pagValue + val
        })
    }

    render() {

        let result = [];
        const coins = this.state.coins;
        const items = this.props.items
        const cantOfItems = items.length;
        items.forEach(obj => result.push(<ItemCard data={obj} key={obj.id} coins={coins}  setCoins={this.setCoins} />));
        const pagination = {
            style: {
                marginTop: `${this.state.pagValue}px`
            }
        }


        return (
            <section className="box-wrapper">
                <header className="row header-container">
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <h1>{cantOfItems} productos</h1>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 action-buttons-container">
                        <Pagination setPagination={this.setPagination} pagPos={this.state.pagValue} parentElement={this.refs.content}  />
                        <CheckoutBtn />
                    </div>

                </header>

                <div className="row items-container">
                    <div className="wrapper-slide" >
                        <ul ref="content" style={pagination.style}>
                            {result}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}