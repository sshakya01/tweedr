import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TweedList from './components/TweedList';
import Input from './components/Input';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
      tweed: '',
    }
    // HANDLER METHODS BINDERS
    this.handleTweed = this.handleTweed.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount(){
    axios('http://localhost:3001/api/tweeds')
      .then(res => {
        this.setState(prevState => {
          return {
            data: res.data.data.tweeds,
          }
        })
      })
  }

  //
  handleTweed(e) {
    this.setState({
      tweed: e.target.value,
    })
  }

  /* Handler */
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.tweed);
    axios.post('/api/tweeds', {
      tweed_text: this.state.tweed,
    })
    .then(res => {
      console.log(res);
      // const newTweed = {
      //   tweed: res.data.data.tweed.tweed_text,
      //   time: res.data.data.tweed.tweed_time,
      // }

      // this.setState(prevState =>{
      //   return {
      //     data: prevState.data.concat(newTweed),
      //   }
      // }
      // )
    }

      )
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tweedr</h2>
        </div>
        <Input
          submit={this.handleSubmit}
          new={this.state.tweed}
          handleTweed={this.handleTweed}
          />
        <TweedList
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
