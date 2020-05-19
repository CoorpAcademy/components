import React from 'react';
import PropTypes from 'prop-types';
import {map, pipe, set, get, getOr, identity, constant} from 'lodash/fp';

import Accordion from '../container';

const mapi = map.convert({cap: false});
const map2 = (iteratee, arr1, arr2) => {
  return mapi((value1, index) => {
    const value2 = get(index, arr2);
    return iteratee(value1, value2);
  }, arr1);
};

class AccordionToggler extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.isOpen) return null;

    const isOpen = map(getOr(false, 'isOpen'), props.tabProps);

    return {isOpen};
  }

  constructor(props) {
    super(props);

    this.state = {isOpen: null};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(key) {
    this.setState(prevState => {
      return {
        isOpen: pipe(
          this.props.oneTabOnly ? map(constant(false)) : identity,
          set(key, !get(key, prevState.isOpen))
        )(prevState.isOpen)
      };
    });
  }

  mergePropsAndState() {
    return map2(
      (props, isOpen) => ({
        ...props,
        isOpen
      }),
      this.props.tabProps,
      this.state.isOpen
    );
  }

  render() {
    const {children = [], theme} = this.props;
    return (
      <Accordion tabProps={this.mergePropsAndState()} onClick={this.handleOnClick} theme={theme}>
        {children}
      </Accordion>
    );
  }
}

AccordionToggler.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  oneTabOnly: PropTypes.bool,
  theme: PropTypes.string
};

export default AccordionToggler;
