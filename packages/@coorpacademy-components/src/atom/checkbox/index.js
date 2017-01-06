import React, {PropTypes} from 'react';
import isEqual from 'lodash/fp/isEqual';
import noop from 'lodash/fp/noop';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const {checked} = props;
    this.state = {checked};
    this.handleChangeBound = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return isEqual({
      ...nextProps,
      ...nextState
    }, {
      ...this.props,
      ...this.state
    });
  }

  handleChange(e) {
    this.props.onChange(e.target.checked);
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    return (
      <input
        type="checkbox"
        {...this.props}
        {...this.state}
        onChange={this.handleChangeBound}
      >
        {this.props.children}
      </input>
    );
  }
}

Checkbox.defaultProps = {
  onChange: noop
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node
};

export default Checkbox;
