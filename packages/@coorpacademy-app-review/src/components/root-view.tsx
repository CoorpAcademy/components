import React from 'react';
import styles from './root-view.modules.css';

// -----------------------------------------------------------------------------

const Button = (props) => <p {...props} className={styles.textButton} />;

const NavText = ({viewName, navigateTo}) => {
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

const RootView = (props) => {
  return (
    <div>
      <NavText viewName={props.viewName} navigateTo={props.navigateTo} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default RootView;
