import React from 'react';

class Tweed extends Component{
  render(){
    // renders the tweed component
    return(
      <div className="tweed">
      <h2>{this.props.tweed.tweed_text}</h2>
      <h2><span>{this.props.tweed.tweed_time}</span>
      </div>
      )
  }
}

export default Tweed;
