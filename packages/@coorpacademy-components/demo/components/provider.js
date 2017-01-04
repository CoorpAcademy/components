import React from 'react';

class Provider extends React.Component {
  constructor(props, context) {
    const {store, history, skin, translate} = props;
    super(props, context);
    this.state = {store, history, skin, translate};
  }

  getChildContext() {
    return this.state;
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
