import React from 'react';

const Tab = props => (
  <div onClick={() => props.onTabClick(props.targetContent)}>
    <div>
      {props.title}
    </div>
    <div>
      {props.links.map(link => (
        <div>
          {link.title}
        </div>
      ))}
    </div>
  </div>
);

export default Tab;
