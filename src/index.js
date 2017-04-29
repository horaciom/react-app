require('./index.scss');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import ItemsContainer from './components/items.container/items.container.js';


class Home extends React.Component {
  render () {
    return (
      <div>
          <Header />
          <ItemsContainer />
      </div>
    )

  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));