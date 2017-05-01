require('./header.scss');
import React from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component {
  render() {
    return (
      <header className=" header">
        <div>
          <img className="logo" src={require('./images/logo.png')} alt="logo" />
        </div>

        <div className=" banner">
          <h1>Colección Primavera / Verano 2017</h1>
        </div>

      </header>
    )
  }
}


