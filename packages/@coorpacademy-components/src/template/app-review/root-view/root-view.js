import React from 'react';
import propTypes from './prop-types';
import styles from './root-view.modules.css';

// -----------------------------------------------------------------------------

const Button = props => <p {...props} className={styles.textButton} />;

// -----------------------------------------------------------------------------

const RootView = ({viewName, navigateTo}) => {
  const handleClick = v => () => navigateTo(v);

  switch (viewName) {
    case 'home': {
      return <Button onClick={handleClick('onboarding')}>view home</Button>;
    }
    case 'onboarding': {
      return <Button onClick={handleClick('quizzer')}>view onboarding</Button>;
    }
    case 'quizzer': {
      return <Button onClick={handleClick('home')}>view quizzer</Button>;
    }
    default:
      return <Button>view (none selected)</Button>;
  }
};

RootView.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default RootView;
