// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    this.decrement();
    const stillGoing = <div>{this.state.secondsLeft} seconds left before I go boom!</div>;
    const explode = <div>Boom!</div>
    return (!!this.state.secondsLeft > 0 ? stillGoing : explode);
  }

  decrement = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1,
    })
  }
}

export default Bomb