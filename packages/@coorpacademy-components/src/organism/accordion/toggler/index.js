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
    const isOpenOtherTab = this.props.oneTabOnly ? false : currentOpenState;
    return isSelectedTab ? !currentOpenState : isOpenOtherTab;
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
  oneTabOnly: PropTypes.bool
};

export default AccordionToggler;
