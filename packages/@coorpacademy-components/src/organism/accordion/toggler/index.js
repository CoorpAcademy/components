import React from 'react';
import PropTypes from 'prop-types';
import {map, pipe, set, get, getOr, identity, constant, zipWith} from 'lodash/fp';

import Accordion from '../container';

class AccordionToggler extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.isOpenValues) return null;

    const isOpenValues = map(getOr(false, 'isOpen'), props.tabProps);

    return {isOpenValues};
  }

  constructor(props) {
    super(props);

    this.state = {isOpenValues: null};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(key) {
    this.setState(prevState => {
      return {
        isOpenValues: pipe(
          this.props.oneTabOnly ? map(constant(false)) : identity,
          set(key, !get(key, prevState.isOpenValues))
        )(prevState.isOpenValues)
      };
    });
  }

  mergePropsAndState() {
    return zipWith(
      (props, isOpen) => ({
        ...props,
        isOpen
      }),
      this.props.tabProps,
      this.state.isOpenValues
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
