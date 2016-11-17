import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    value: checker.number,
    max: checker.number,
    desc: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const ProgressBar = (props, children) => {
    const {
      value,
      max,
      desc = ''
    } = props;

    const ratio = value / max;
    const percentage = Math.floor(ratio * 100);
    const text = `${percentage}%`;

    return (
      <div className={style.background}>
        <div
          className={style.progress}
          style={{
            width: `${percentage}%`
          }}
        >
          <span className={style.description}>{`${value}/${max} ${desc}`}</span>
          <span className={style.percentage}>{text}</span>
        </div>
      </div>
    );
  };

  ProgressBar.validate = createValidate(conditions);
  return ProgressBar;
};
