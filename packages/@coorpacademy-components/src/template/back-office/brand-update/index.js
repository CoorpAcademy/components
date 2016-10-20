import map from 'lodash/fp/map';
import {checker, createValidate} from '../../../util/validation';
import createBreadcrumbs from '../../../molecule/breadcrumbs';
import createBrandTabs from '../../../molecule/brand-tabs';
import createBrandContent from '../../../organism/brand-content';
import createNotification from '../../../atom/notification';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    notifications: checker.arrayOf(checker.shape({
      type: checker.string,
      message: checker.string,
      onClose: checker.func.optional
    })).optional,
    breadcrumbs: checker.arrayOf(checker.shape({
      icon: checker.string.optional,
      title: checker.string,
      href: checker.string.optional
    })),
    links: checker.arrayOf(checker.shape({
      title: checker.string,
      href: checker.string,
      type: checker.string.optional
    })),
    tabs: checker.arrayOf(checker.shape({
      title: checker.string,
      href: checker.string,
      selected: checker.bool.optional
    })),
    content: checker.shape({
      groups: checker.arrayOf(checker.shape({
        title: checker.string,
        disabled: checker.bool.optional,
        fields: checker.arrayOf(checker.shape({
          type: checker.string,
          title: checker.string,
          value: checker.any.optional,
          values: checker.arrayOf(checker.string).optional,
          placeholder: checker.string.optional,
          disabled: checker.bool.optional,
          description: checker.string.optional,
          error: checker.string.optional,
          onChange: checker.func.optional
        }))
      })),
      disabled: checker.bool.optional,
      isModified: checker.bool.optional,
      isPending: checker.bool.optional,
      onSubmit: checker.func.optional
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Breadcrumbs = createBreadcrumbs(treant, options);
  const BrandTabs = createBrandTabs(treant, options);
  const BrandContent = createBrandContent(treant, options);
  const Notification = createNotification(treant, options);

  const BrandUpdate = (props, children) => {
    const {
      notifications,
      links,
      breadcrumbs,
      tabs,
      content
    } = props;

    const notificationsList = map(notification => {
      return (
        <div className={style.notification}>
          <Notification {...notification} />
        </div>
      )
    }, notifications);

    return (
      <div className={style.container}>
        <div className={style.headerWrapper}>
          <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
        </div>
        <div className={style.tabsWrapper}>
          <BrandTabs tabs={tabs} />
        </div>
        <div className={style.notifications}>
          {notificationsList}
        </div>
        <div className={style.contentWrapper}>
          <BrandContent {...content} />
        </div>
      </div>
    );
  };

  BrandUpdate.validate = createValidate(conditions);
  return BrandUpdate;
};
