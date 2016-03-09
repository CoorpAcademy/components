import createTitle from '../../atom/title';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  return  (
    <p>
      {props.children}
    </p>
  );
};
