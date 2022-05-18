import React from 'react';

// -----------------------------------------------------------------------------

const NavText = ({viewName, navigateTo}) => {
  switch (viewName) {
    case 'home':
      return <p onClick={() => navigateTo('onboarding')}>view home</p>;
    case 'onboarding':
      return <p onClick={() => navigateTo('quizzer')}>view onboarding</p>;
    case 'quizzer':
      return <p onClick={() => navigateTo('home')}>view quizzer</p>;
    default:
      return <p>view (none selected)</p>;
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
