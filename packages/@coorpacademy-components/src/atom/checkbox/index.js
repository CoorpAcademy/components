import React from 'react';
import noop from 'lodash/fp/noop';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const {checked} = props;
    this.state = {checked};
  }

  changeHandler(e) {
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
        onChange={e => this.changeHandler(e)}
      >
        {this.props.children}
      </input>
    );
  }
}

Checkbox.defaultProps = {
  onChange: noop
};

export default Checkbox;
