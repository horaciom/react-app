require('./index.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import ItemsContainer from './components/items.container/items.container.js';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  //is a good place to inital request pd: by doc
  componentDidMount() {
    this.itemList();
    this.userInfo();
  }

  itemList() {
    const url = 'http://localhost:3004/products';
    return fetch(url).then(response => response.json()).then(data => {
      this.setState({ items: data });
    }).catch(() => console.log("error"));
  }

  userInfo(){
    const url = 'http://localhost:3004/user';
    return fetch(url).then(response => response.json()).then(data => {
      this.setState({ user: data });
    }).catch(() => console.log("error"));
  }



  render() {
   
    return (
      <div>
        <Header />
        <ItemsContainer items={this.state.items} user={this.state.user} />
      </div>
    )

  }
}

ReactDOM.render(<Home />, document.getElementById('app'));