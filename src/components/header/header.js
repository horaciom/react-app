require('./header.scss');
import React from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component {
  render () {
    return (
      <header className="section group header">
        <div className="col span_4_of_4">
          <img className="logo" src={require('./images/logo.png')} alt="logo" />
        </div>

        <div className="banner">
          <h1>Colección Primavera / Verano 2017</h1>  
        </div> 

      </header>
    )
  }
}


