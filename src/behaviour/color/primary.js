import behaviour from '../behaviour';
import React from 'react';

const primary = (props, skin) => {
  // return React.Children.map(props.children, (child) =>
  //   React.cloneElement(child)
  // );
  return props.children;
};

  // debugger;
  // return props.children.map(function(child){
  //   for (var property in props.on){
  //     var defaultValue = props.on[property];
  //     var skinValue = skin && skin.primary;
  //     child.properties.style = child.properties.style || {};
  //     child.properties.style[property] = skinValue || defaultValue ;
  //   }
  //   return child;
  // });
// };


export default behaviour(primary);
