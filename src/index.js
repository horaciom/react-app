require('./index.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import ItemsContainer from './components/items.container/items.container.js';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], user: {}, coins:0 };
    this.setCoins = this.setCoins.bind(this);
  }

  //is a good place to inital request pd: by doc
  componentDidMount() {
    this.itemList();
    this.userInfo();
  }

  itemList() {
    const url = 'http://localhost:3004/items';
    return fetch(url).then(response => response.json()).then(data => {
      this.setState({ items: data });
    }).catch(() => console.log("error"));
  }

  userInfo() {
    const url = 'http://localhost:3004/user';
    return fetch(url).then(response => response.json()).then(data => {
      this.setState({ user: data });
      this.setState({ coins: data.cash });
    }).catch(() => console.log("error"));
  }

  setCoins(coins){
    this.setState({coins:coins});
  }

  render() {
    
    return (
      <div>
        <Header coins={this.state.coins} />
        <ItemsContainer items={this.state.items} user={this.state.user}  coins={this.state.coins} setCoins={this.setCoins} />
      </div>
    )

  }
}

ReactDOM.render(<Home />, document.getElementById('app'));