require('./item.card.scss');
var classNames = require('classnames');
import React from 'react';
import ReactDOM from 'react-dom';


export default class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: false, canBuy: false };
    }

    mouseHover() {
        this.setState({ active: true });
    }

    mouseLeave() {
        this.setState({ active: false });
    }

    componentWillReceiveProps(nextProps) {
        const userCash = nextProps.user.cash;
        const price = nextProps.data.price;
        this.setState({ canBuy: (+userCash >= +price) , leftCoin:(+price - +userCash) });
    }

    render() {

        const user = this.props.user;
        const leftCoin = this.state.leftCoin;
        const classes = classNames('hover-effect column', { active: this.state.active, 'can-buy': this.state.canBuy }  );
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
            <li className="item-card">
                <div className={classes} onMouseEnter={this.mouseHover.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>

                    <figure style={styles.root}>  </figure>

                    <span className="left-coints" > {leftCoin > 1 ? 'TE FALTAN' : 'TE FALTA'} <i className="coin"></i> {leftCoin} </span>

                    <i className="material-icons icon orange" >local_mall</i>

                    <div className="exchange-now">
                        <p>
                            <span> <i className="coin-big "></i> {price}</span>
                        </p>
                        <p>
                            <button className="exchange-button">Canjear ahora</button>
                        </p>
                    </div>
                </div>
                <h2>{title}</h2>
                <h3>{category}</h3>
            </li>

        )
    }
}