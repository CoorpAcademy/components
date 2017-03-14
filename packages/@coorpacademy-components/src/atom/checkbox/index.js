import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import shallowCompare from '../../util/shallow-compare';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const {checked} = props;
    this.state = {checked};
    this.handleChangeBound = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleChange(e) {
    this.props.onChange(e.target.checked);
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    return (
      // eslint-disable-next-line react/void-dom-elements-no-children
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
