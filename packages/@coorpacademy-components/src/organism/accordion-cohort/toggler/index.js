import React from 'react';
import PropTypes from 'prop-types';
import forEach from 'lodash/fp/forEach';
import AccordionCohort from '../container';

class AccordionCohortToggler extends React.Component {
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
      <AccordionCohort tabProps={this.state.tabProps} onClick={this.handleOnClick}>
        {children}
      </AccordionCohort>
    );
  }
}
AccordionCohortToggler.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(AccordionCohort.PropTypes)),
  oneTabOnly: PropTypes.bool
};

export default AccordionCohortToggler;
