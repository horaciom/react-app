require('./item.card.scss');
var classNames = require('classnames');
import React from 'react';
import ReactDOM from 'react-dom';


export default class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: false, canBuy: false, exchange: false };
        this.exchangeItem = this.exchangeItem.bind(this);
        this.cancelExchangeItem = this.cancelExchangeItem.bind(this);
        
    }

    mouseHover() {
        this.setState({ active: true });
    }

    mouseLeave() {
        this.setState({ active: false });
    }

    componentWillReceiveProps(nextProps) {
        const userCash = nextProps.coins;
        const price = nextProps.data.price;
        this.setState({ canBuy: (+userCash >= +price), leftCoins: (+price - +userCash) });
    }

    exchangeItem() {
        this.props.setCoins(this.props.coins - this.props.data.price);
        this.setState({ exchange: !this.state.exchange, active: false });
    }
    
    cancelExchangeItem() {
        this.props.setCoins(this.props.coins + this.props.data.price);
        this.setState({ exchange: !this.state.exchange, active: false });
    }

    render() {

        const user = this.props.user;
        const leftCoins = this.state.leftCoins;
        const classes = classNames('hover-effect', { active: this.state.active, 'can-buy': this.state.canBuy });
        const classExchange = classNames('item-card flip-container', { active: this.state.exchange });

        const image = this.props.data.image;
        const price = this.props.data.price;
        const category = this.props.data.category;
        const title = this.props.data.title;

        const styles = {
            root: {
                backgroundImage: `url(${image})`,
            }
        }

        return (
            <li className={classExchange}>
                <div className="flipper">
                    <div className="front">
                        <div className={classes} onMouseEnter={this.mouseHover.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>

                            <figure style={styles.root}>  </figure>

                            <span className="left-coints" > {leftCoins > 1 ? 'TE FALTAN' : 'TE FALTA'} <i className="coin"></i> {leftCoins} </span>

                            <i className="material-icons icon orange" >local_mall</i>

                            <div className="exchange-now">
                                <p>
                                    <span> <i className="coin-big "></i> {price}</span>
                                </p>
                                <p>
                                    <button className="exchange-button" onClick={this.exchangeItem}>Canjear ahora</button>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="back">
                        <p>
                            <i className="material-icons">check_circle</i>
                        </p>
                        <h2>Felicitaciones!</h2>
                        <p><span>Haz cambiado {title} por {price} monedas</span></p>
                        <p><button onClick={this.cancelExchangeItem}>cancelar</button></p>
                    </div>

                </div>
                <div className="head">
                    <h2>{title}</h2>
                    <h3>{category}</h3>
                </div>
            </li>

        )
    }
}