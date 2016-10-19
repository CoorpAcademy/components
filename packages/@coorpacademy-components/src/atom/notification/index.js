import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.string,
    message: checker.string,
    onClose: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Notification = (props, children) => {
    const {
      type,
      message
    } = props;

    const className = type ? style[type] : style.message;

    return (
      <div className={className}>
        <span>!</span>{message}
      </div>
    );
  };

  Notification.validate = createValidate(conditions);
  return Notification;
};
