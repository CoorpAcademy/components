import behaviour from '../behaviour';

const primary = (props, skin) => props.children.map(function(child){
  for (var property in props.on){
    var defaultValue = props.on[property];
    var skinValue = skin && skin.primary;
    child.properties.style = child.properties.style || {};
    child.properties.style[property] = skinValue || defaultValue ;
  }
  return child;
});


export default behaviour(primary);
