import React from 'react';
import isEqual from 'lodash/fp/isEqual';
import shallowCompare from '../../util/shallow-compare';

class Swapper extends React.Component {
  state = {
    init: true
  };

  componentDidMount() {
    this.requestID = requestAnimationFrame(() => this.setState(() => ({init: false})));
  }

  componentWillReceiveProps(nextProps) {
    if (isEqual(this.props, nextProps)) return;

    const {requestID} = this;
    if (requestID) cancelAnimationFrame(requestID);

    this.requestID = requestAnimationFrame(() => {
      this.setState(
        () => ({init: true}),
        () => {
          this.requestID = requestAnimationFrame(() => {
            this.setState(() => ({init: false}));
          });
        }
      );
    });
  }

  shouldComponentUpdate(...args) {
    return shallowCompare(this, ...args);
  }

  componentWillUnmount() {
    const {requestID} = this;
    if (requestID) cancelAnimationFrame(requestID);
  }

  render() {
    const {init} = this.state;
    const {children, ...props} = this.props;
    return React.Children.map(children, child => (init ? React.cloneElement(child, props) : child));
  }
}

export default Swapper;
