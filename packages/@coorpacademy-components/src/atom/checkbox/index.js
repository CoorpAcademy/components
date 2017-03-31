// @flow
import React, {type Children} from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import shallowCompare from '../../util/shallow-compare';

type DefaultProps = {
  onChange: Function
};

export type Props = {
  children?: Children,
  onChange: Function,
  checked: boolean,
  /* eslint-disable react/no-unused-prop-types */
  required?: boolean,
  disabled?: boolean
  /* eslint-enable react/no-unused-prop-types */
};

type State = {
  checked: boolean
};

class Checkbox extends React.Component {
  static defaultProps: {
    onChange: noop
  }

  state: State
  props: Props
  handleChangeBound: Function

  constructor(props: Props) {
    super(props);
    const {checked} = props;
    this.state = {checked};
    this.handleChangeBound = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleChange(e: Event & {target: {checked: boolean}}) {
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
