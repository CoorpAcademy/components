import React from 'react';
import Style from './List.css';

export default (props) => (
  <ul>
    {
      React.Children.map(
        props.children,
        child => ( <li className={ Style.item }>{ child }</li> )
      )
    }
  </ul>
)
