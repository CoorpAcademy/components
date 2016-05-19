import style from './label.css';
import { spec, validate, check } from '../../../util/proptypes-checker';

const conditions = {
  props: null,
  children: spec({
  })
};

export default (engine, options) => {
  const {h} = engine;

  const Label = (props, children) => (
    <span className={style.default}>
      {children}
    </span>
  );

  if (process.env.NODE_ENV !== 'production') {
    Label.validate = validate(conditions);
  }

  return Label;
};
