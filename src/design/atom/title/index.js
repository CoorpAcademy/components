import style from './title.css';

export default (renderer, skin) => (props) => {
  const {h} = renderer;
  var disabled = props && props.disabled;

  return (
    <h1>
      {props.children}
    </h1>
  )
};
