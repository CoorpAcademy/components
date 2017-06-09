import React from 'react';
import PropTypes from 'prop-types';
import forEach from 'lodash/fp/forEach';
import Accordion from '../container';

class AccordionToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabProps: props.tabProps
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.newOpenState = this.newOpenState.bind(this);
  }

  handleOnClick(key) {
    this.setState(prevState => {
      const newState = {...prevState};

      forEach.convert({cap: false})((part, index) => {
        part.isOpen = this.newOpenState(index === key, part.isOpen);
      }, newState.tabProps);

      return newState;
    });
  }

  newOpenState(isSelectedTab, currentOpenState) {
    switch (this.props.type) {
      case 'all':
        return isSelectedTab ? !currentOpenState : currentOpenState;
      case 'one':
        return isSelectedTab ? !currentOpenState : false;
    }
  }

  render() {
    const {children = []} = this.props;

    return (
      <Accordion tabProps={this.state.tabProps} onClick={this.handleOnClick}>
        {children}
      </Accordion>
    );
  }
}

AccordionToggler.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  type: PropTypes.oneOf(['all', 'one'])
};

export default AccordionToggler;
