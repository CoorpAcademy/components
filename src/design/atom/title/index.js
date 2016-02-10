import style from './title.css';

export default (options, skin) => (props) => {
  const {h} = options;
  var disabled = props && props.disabled;

  return (
    <h1>
      {props.children}
    </h1>
  )
};
