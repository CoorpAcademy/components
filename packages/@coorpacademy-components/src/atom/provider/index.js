import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  constructor(props, context) {
    const {store, history, skin, translate} = props;
    super(props, context);
    this.state = {store, history, skin, translate};
  }

  getChildContext() {
    return this.state;
  }

  componentWillReceiveProps(nextProps) {
    const {store, history, skin, translate} = nextProps;
    this.setState({
      store,
      history,
      skin,
      translate
    });
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  skin: PropTypes.object,
  translate: PropTypes.func,
  children: PropTypes.element.isRequired
};

Provider.childContextTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  skin: PropTypes.object,
  translate: PropTypes.func
};

export default Provider;
