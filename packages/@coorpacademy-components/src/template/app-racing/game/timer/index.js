import React from 'react';
import style from './style.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 4};
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    clearInterval(this.timer);
    this.setState({count: this.state.count - 1});
    if (this.state.count > 0) {
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  }

  render() {
    return (
      <div className={style.timer}>
        <h1>{this.state.count > 0 ? this.state.count : 'Start!'}</h1>
      </div>
    );
  }
}

export default Timer;
