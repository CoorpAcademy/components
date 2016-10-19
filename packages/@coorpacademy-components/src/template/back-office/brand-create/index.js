import {checker, createValidate} from '../../../util/validation';
import createBrandCreateForm from '../../../molecule/brand-create-form';
import createNotification from '../../../atom/notification';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    notifications: checker.arrayOf(checker.shape({
      type: checker.string,
      message: checker.string,
      onClose: checker.func.optional
    })).optional,
    title: checker.string,
    subtitle: checker.string,
    description: checker.string,
    field: checker.shape({
      placeholder: checker.string,
      label: checker.string,
      onChange: checker.func,
      error: checker.string.optional,
      value: checker.string.optional
    }),
    onSubmit: checker.func,
    submitValue: checker.string,
    isPending: checker.bool.optional,
    isModified: checker.bool.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandCreateForm = createBrandCreateForm(treant, options);
  const Notification = createNotification(treant, options);

  const BrandCreate = (props, children) => {
    const {
      notifications
    } = props;

    const notificationsList = notifications.map(notification => {
      return (
        <div className={style.notification}>
          <Notification {...notification} />
        </div>
      )
    });

    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.notifications}>
            {notificationsList}
          </div>
          <BrandCreateForm {...props} />
        </div>
      </div>
    );
  };

  BrandCreate.validate = createValidate(conditions);
  return BrandCreate;
};
