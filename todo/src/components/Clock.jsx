import React, { Component } from 'react';
import 'nes.css/css/nes.min.css'; 
import '../css/Style.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      currentTime: this.getCurrentTime(),
    });
  }

  getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  render() {
    return (
      <div>
        <h1 className='nes-container is-rounded clock'>{this.state.currentTime}</h1>
      </div>
    );
  }
}

export default Clock;
