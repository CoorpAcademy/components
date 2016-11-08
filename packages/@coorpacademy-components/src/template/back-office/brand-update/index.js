import map from 'lodash/fp/map';
import {checker, createValidate} from '../../../util/validation';
import createBreadcrumbs from '../../../molecule/breadcrumbs';
import createBrandTabs from '../../../molecule/brand-tabs';
import createBrandContent from '../../../organism/brand-content';
import createNotification from '../../../atom/notification';
import createLayout from '../layout';
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
      type: checker.oneOf(['form', 'list']).optional
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Breadcrumbs = createBreadcrumbs(treant, options);
  const BrandTabs = createBrandTabs(treant, options);
  const BrandContent = createBrandContent(treant, options);
  const NotificationComponent = createNotification(treant, options);
  const Layout = createLayout(treant, options);

  const BrandUpdate = Layout((props, children) => {
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
          <NotificationComponent {...notification} />
        </div>
      );
    }, notifications);

    const contentView = cont =>  {
      const {
        type
      } = cont;

      switch (type) {
        case 'form':
          return (
            <BrandContent {...cont} />
          );
        case 'list':
          return null;
        default:
          return null;
      };
    };

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
          {contentView(content)}
        </div>
      </div>
    );
  });

  BrandUpdate.validate = createValidate(conditions);
  return BrandUpdate;
};
