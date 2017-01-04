import React from 'react';
import isEqual from 'lodash/fp/isEqual';

class Provider extends React.Component {
  constructor(props, context) {
    const {store, history, skin, translate} = props;
    super(props, context);
    this.state = {store, history, skin, translate};
  }

  getChildContext() {
    return this.state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentState = this.state;
    return isEqual(currentState, nextState);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.propTypes = {
  store: React.PropTypes.object,
  history: React.PropTypes.object,
  skin: React.PropTypes.object,
  translate: React.PropTypes.func,
  children: React.PropTypes.element.isRequired
};

Provider.childContextTypes = {
  store: React.PropTypes.object,
  history: React.PropTypes.object,
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

export default Provider;
