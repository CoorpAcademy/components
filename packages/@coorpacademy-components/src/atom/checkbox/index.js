import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash/fp';

class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

  constructor(props) {
    super(props);
    const {checked} = props;
    this.state = {checked};
    this.handleChangeBound = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {onChange = noop} = this.props;
    onChange(e.target.checked);
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    const {props, state} = this;
    return <input {...props} {...state} type="checkbox" onChange={this.handleChangeBound} />;
  }
}

export default Checkbox;
