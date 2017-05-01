require('./header.scss');
import React from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coins: 0 };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.coins) this.setState({ coins: nextProps.coins});
  }

  render() {

    return (
      <header className=" header">
        <div>
          <img className="logo" src={require('./images/logo.png')} alt="logo" />
          <span className="cant-coins"><i className="coin"></i> {this.state.coins} </span>
        </div>

        <div className=" banner">
          <h1>Colección Primavera / Verano 2017</h1>
        </div>

      </header>
    )
  }
}


