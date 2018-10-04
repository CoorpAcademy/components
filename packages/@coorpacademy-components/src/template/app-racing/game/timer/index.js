import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    const initialCount = props.start + 1 || 4;
    this.state = {
      initialCount,
      count: initialCount
    };
  }

  componentDidMount() {
    setTimeout(this.tick.bind(this), this.props.delay || 0);
  }

  tick() {
    clearInterval(this.timer);
    this.setState({count: this.state.count - 1});
    if (this.state.count > 0) {
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  }

  render() {
    return this.state.count === this.state.initialCount ? null : (
      <div className={this.props.className}>
        <h1>{this.state.count > 0 ? this.state.count : this.props.text || 'Start!'}</h1>
      </div>
    );
  }
}

export default Timer;
