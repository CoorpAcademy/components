import {checker, createValidate} from '../../util/validation';
import AddClassBehaviour from '../../behaviour/effects/add-class';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    value: checker.number,
    max: checker.number,
    desc: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const AddClass = AddClassBehaviour(treant, options);

  const ProgressBar = (props, children) => {
    const {
      className,
      value,
      max,
      desc = ''
    } = props;

    const ratio = value / max;
    const percentage = Math.floor(ratio * 100);
    const text = `${percentage}%`;

    return (
      <AddClass className={className}>
        <div className={style.background}>
          <div
            className={style.progress}
            style={{
              width: `${percentage}%`
            }}
          />
          <p className={style.texts}>
            <span className={style.description}>{`${value}/${max} ${desc}`}</span>
            <span className={style.percentage}>{text}</span>
          </p>
        </div>
      </AddClass>
    );
  };

  ProgressBar.validate = createValidate(conditions);
  return ProgressBar;
};
