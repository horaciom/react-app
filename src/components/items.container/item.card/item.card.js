require('./item.card.scss');
import React from 'react';
import ReactDOM from 'react-dom';


export default class ItemCard extends React.Component {
    render() {
        var divImage = {
            backgroundImage: "url('https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250')",
            width: '100%',
            height: '300px',
            backgroundPosition: 'center center',
            backgroundSize: 'contain'
        };

        return (
            <article className="col span_1_of_4 item-card">
                <div className="wrapper-img" style={divImage}>
                    <div className="hover-img"></div>

                    <span className="left-coints" style={{display:'none'}}>TE FALTAN <i className="coin"></i> 1.200 </span>

                    <i className="material-icons icon orange">local_mall</i>

                    <div className="exchange-now">
                        <p>
                            <span> <i className="coin-big "></i> 1.800</span>

                        </p>
                        <p>
                            <button className="exchange-button">Canjear ahora</button>
                        </p>
                    </div>
                </div>
                <h2>Sandalia Pale Gold YSL</h2>
                <h3>Indumentaria</h3>

            </article>
        )
    }
}