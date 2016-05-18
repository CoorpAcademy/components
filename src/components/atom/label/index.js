import style from './label.css';
import { spec, validate, check } from '../../../util/proptypes-checker';

const propTypes = spec({
});

export default (engine, options) => {
  const {h} = engine;

  const Label = (props, children) => (
    <span className={style.default}>
      {children}
    </span>
  );

  Label.validate = validate(propTypes);

  return Label;
};
