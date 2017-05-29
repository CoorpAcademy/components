import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const {checked} = props;
    this.state = {checked};
    this.handleChangeBound = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.checked);
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    const {props, state} = this;
    return <input type="checkbox" {...props} {...state} onChange={this.handleChangeBound} />;
  }
}

Checkbox.defaultProps = {
  onChange: noop
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
