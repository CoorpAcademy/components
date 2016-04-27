import style from './label.css';
import { spec, validate } from '../../../util/proptypes-checker';

const propTypes = spec({
  children: 'string'
});

export default (engine, options) => {
  const {h} = engine;

  return (props, children) => {
    validate(props, propTypes);

    return (
      <span className={style.default}>
        {children}
      </span>
    );
  };
};
