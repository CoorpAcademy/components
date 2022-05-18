import React from 'react';
import styles from './root-view.modules.css';

// -----------------------------------------------------------------------------

const Button = (props) => <p {...props} className={styles.textButton} />;

// -----------------------------------------------------------------------------

const RootView = ({viewName, navigateTo}) => {
  switch (viewName) {
    case 'home':
      return <Button onClick={() => navigateTo('onboarding')}>view home</Button>;
    case 'onboarding':
      return <Button onClick={() => navigateTo('quizzer')}>view onboarding</Button>;
    case 'quizzer':
      return <Button onClick={() => navigateTo('home')}>view quizzer</Button>;
    default:
      return <Button>view (none selected)</Button>;
  }
};

// -----------------------------------------------------------------------------

export default RootView;
