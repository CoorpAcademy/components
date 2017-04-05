import React from 'react';

const TabContent = props => (
  <div>
    <div>
      {props.translations.titles[props.activeContent]}
    </div>
    <div>
      {props.children}
    </div>
  </div>
);

export default TabContent;
