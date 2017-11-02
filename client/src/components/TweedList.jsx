import React, {Component} from 'react';
import Tweed from './Tweed';

class TweedList extends Component{

  render(){
    return (
    <div id='TweedList'>
      {this.props.data.map(tweed => {
        return <Tweed tweed={tweed} key = {tweed.id} />
      })}
    </div>
    )
  }
}

export default TweedList;

