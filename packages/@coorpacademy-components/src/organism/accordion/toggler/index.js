import React from 'react';
import PropTypes from 'prop-types';
import {map, pipe, set, get, getOr, identity, constant, zipWith} from 'lodash/fp';

import Accordion from '../container';

class AccordionToggler extends React.Component {
  static propTypes = {
    tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.propTypes)),
    oneTabOnly: PropTypes.bool,
    theme: PropTypes.string,
    children: PropTypes.node
  };

  static getDerivedStateFromProps(props, state) {
    if (state.isOpenValues && state.isOpenValues.length === props.tabProps.length) return null;

    const isOpenValues = map(getOr(false, 'isOpen'), props.tabProps);
    return {isOpenValues};
  }

  constructor(props) {
    super(props);

    this.state = {isOpenValues: null};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(key) {
    const {oneTabOnly} = this.props;
    this.setState(prevState => {
      return {
        isOpenValues: pipe(
          oneTabOnly ? map(constant(false)) : identity,
          set(key, !get(key, prevState.isOpenValues))
        )(prevState.isOpenValues)
      };
    });
  }

  mergePropsAndState() {
    const {tabProps} = this.props;
    const {isOpenValues} = this.state;

    return zipWith(
      (props, isOpen) => ({
        ...props,
        isOpen
      }),
      tabProps,
      isOpenValues
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

export default AccordionToggler;
