import {checker, createValidate} from '../../util/validation';
import AddClassBehaviour from '../../behaviour/effects/add-class';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const AddClass = AddClassBehaviour(treant, options);

  const Loader = (props, children) => {
    const {
      className
    } = props;

    let progress = (
      <div className={style.container}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    );

    if (className) {
      progress = (
        <AddClass className={className}>
          {progress}
        </AddClass>
      );
    }

    return progress;
  };

  Loader.validate = createValidate(conditions);
  return Loader;
};
