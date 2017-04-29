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
        this.setState({ canBuy: (+userCash >= +price) });
    }

    render() {

        const user = this.props.user;
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

                    <span className="left-coints" >TE FALTAN <i className="coin"></i> 1.200 </span>

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
                <h2>{category}</h2>
                <h3>{title}</h3>
            </li>

        )
    }
}