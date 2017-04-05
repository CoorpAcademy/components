import React from 'react';

const Tab = props => (
  <div onClick={() => props.onTabClick(props.tabKey)}>
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
