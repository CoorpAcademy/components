import behaviour from '../behaviour';

function primary(props, children, skin){
  children.map(function(child){
    for (var property in props.on){
      var defaultValue = props.on[property];
      var skinValue = skin && skin.primary;
      child.properties.style = child.properties.style || {};
      child.properties.style[property] = skinValue || defaultValue ;
    }
  });
}

export default behaviour(primary);
