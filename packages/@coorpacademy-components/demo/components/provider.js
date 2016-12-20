import React from 'react';

class Provider extends React.Component {
  constructor(props, context) {
    const {store, history, skin, translate} = props;
    super(props, context);
    this.store = {store, history, skin, translate};
  }

  getChildContext() {
    return this.store;
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object,
  history: React.PropTypes.object,
  skin: React.PropTypes.object,
  translate: React.PropTypes.function
};

export default Provider;
