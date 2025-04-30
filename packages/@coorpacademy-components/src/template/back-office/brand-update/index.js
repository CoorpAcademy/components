import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import find from 'lodash/fp/find';
import classNames from 'classnames';
import BrandTabs from '../../../molecule/brand-tabs';
import {IconLinkItem, LinkItem} from '../../../organism/sidebar';
import BrandForm from '../../../organism/brand-form';
import BrandTable from '../../../organism/brand-table';
import BrandUpload from '../../../organism/brand-upload';
import BrandAnalytics from '../../../organism/brand-analytics';
import BrandDashboard from '../../../organism/brand-dashboard';
import WizardContents from '../../../organism/wizard-contents';
import ListItems from '../../../organism/list-items';
import BrandLearningPriorities from '../../../organism/brand-learning-priorities';
import Banner from '../../../molecule/banner';
import Header from '../../../organism/setup-header';
import HeaderWithActions from '../../../organism/header-with-actions';
import Loader from '../../../atom/loader';
import Accordion from '../../../organism/accordion/coorp-manager';
import CmPopin from '../../../molecule/cm-popin';
import ButtonLinkIcon from '../../../atom/button-link-icon';
import ExpandibleActionableTable from '../../../molecule/expandible-actionable-table';
import BulkInfos from '../../../molecule/bulk-infos';
import Title from '../../../atom/title';
import SkillEdition from '../../../organism/skill-edition';
import IconPickerModal from '../../../molecule/icon-picker-modal';
import style from './style.css';
import {POPIN_THEMES} from './utils';

const getStyle = isSelected => (isSelected ? style.selectedElement : style.unselectedElement);

const subTabsView = (_subTabs = []) =>
  map.convert({cap: false})((subTab, _index) => (
    <div key={subTab.title}>
      {subTab.type === 'iconLink' ? (
        <IconLinkItem
          {...subTab}
          styles={getStyle(subTab.selected)}
          uppercase={false}
          target={'_blank'}
        />
      ) : (
        <LinkItem
          {...subTab}
          styles={getStyle(subTab.selected)}
          uppercase={false}
          setChildrenAsHtml={false}
        />
      )}
    </div>
  ))(_subTabs);

// TODO: this fonction should be replaced by a molecule to avoid this file to be unreadable
const buildLeftNavigation = (logo, items, onItemClick) => {
  const formattedTabs = items.map(({key, title, href, selected, type = 'simpleTab'}, index) => ({
    title,
    selected,
    type,
    href,
    index,
    children: [],
    iconType: key || 'arrow'
  }));

  const formattedTabsViews = map(tab => (
    <div key={tab.title} className={style.subTabsView}>
      {subTabsView(tab.tabs)}
    </div>
  ))(items);

  return (
    <div className={style.navigation}>
      <div className={style.logo}>
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <Accordion tabProps={formattedTabs} theme={'setup'} onClick={onItemClick}>
        {formattedTabsViews}
      </Accordion>
    </div>
  );
};

const buildNotifications = notifications => {
  if (isEmpty(notifications)) {
    return null;
  }

  const notificationsList = notifications.map((notification, index) => {
    return (
      <div className={!notification.temporary ? style.permanentNotification : null} key={index}>
        <Banner {...notification} />
      </div>
    );
  });
  return (
    <div className={!find({temporary: true}, notifications) ? style.permanentNotifications : null}>
      {notificationsList}
    </div>
  );
};

const buildHeader = header => {
  return (
    <div className={style.header}>
      {header.type === 'header-with-actions' ? (
        <HeaderWithActions {...header} />
      ) : (
        <Header {...header} />
      )}
    </div>
  );
};

const buildDefaultPopin = popin => {
  const {theme, icon: popinIcon, secondButton: popinSecondButton} = popin;
  const {icon: themeIcon, actionButton: themeActionButton} = POPIN_THEMES[theme] ?? {};

  return (
    <div className={style.popin}>
      <CmPopin
        {...popin}
        icon={popinIcon || themeIcon}
        secondButton={{...popinSecondButton, ...themeActionButton}}
      />
    </div>
  );
};

const buildPopin = popin => {
  if (isEmpty(popin)) return;

  switch (popin.type) {
    case 'icon-picker':
      return <IconPickerModal {...popin} />;
    default:
      return buildDefaultPopin(popin);
  }
};

const buildDocumentation = documentation => {
  if (!documentation) return null;
  const {show = false, onClose, content = ''} = documentation;
  return (
    <div className={classNames(style.documentation, show && style.open)}>
      <div
        className={style.documentationContent}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: content}}
      />
      {onClose ? (
        <ButtonLinkIcon
          className={style.closeButton}
          onClick={onClose}
          data-name={'close-icon'}
          aria-label={'close-icon'}
          size="small"
          icon="close"
        />
      ) : null}
    </div>
  );
};

const buildTabs = items => {
  const selectedTab = pipe(
    find(e => e.selected),
    get('tabs'),
    find(e => e.selected)
  )(items);

  const showTabs = selectedTab ? find(e => e.selected, selectedTab.subTabs) : undefined;
  if (!showTabs) return null;
  return (
    <div className={style.tabs}>
      <BrandTabs type="light" tabs={selectedTab.subTabs} />
    </div>
  );
};

const buildContentView = content => {
  if (!content) {
    return (
      <div className={style.loaderContainer}>
        <Loader className={style.loader} theme="coorpmanager" />
      </div>
    );
  }

  const {type} = content;
  switch (type) {
    case 'form':
      return <BrandForm {...content} />;
    case 'list':
      return <BrandTable {...content} />;
    case 'upload':
      return <BrandUpload {...content} />;
    case 'analytics-dashboards':
      return <BrandAnalytics {...content} />;
    case 'list-content':
    case 'expandible-actionable-table':
      return <ListItems {...content} />;
    case 'home':
      return <BrandDashboard {...content} />;
    case 'wizard':
    case 'expandible-table':
      return <WizardContents {...content} />;
    case 'bulk-empty-dashboard':
      return <BulkInfos {...content} />;
    case 'table-pending':
      return <ExpandibleActionableTable {...content} />;
    case 'learning-priorities':
      return <BrandLearningPriorities {...content} />;
    case 'skill-edition':
      return <SkillEdition {...content} />;
  }
};

const buildDetailsView = details => {
  if (!details) return;
  return <BrandTable {...details} />;
};

const buildTitle = title => {
  if (isEmpty(title)) return;
  return (
    <div className={style.title}>
      <Title {...title} />
    </div>
  );
};

const BrandUpdate = props => {
  const {
    notifications,
    header,
    items,
    content,
    details,
    popin,
    onItemClick,
    documentation,
    contentFixHeight,
    title
  } = props;
  const logo = 'https://static.coorpacademy.com/logo/coorp-manager.svg';

  const leftNavigation = buildLeftNavigation(logo, items, onItemClick);
  const notificationsView = buildNotifications(notifications);
  const documentationView = buildDocumentation(documentation);
  const headerView = buildHeader(header, notifications);
  const tabsView = buildTabs(items);
  const contentView = buildContentView(content);
  const detailsView = buildDetailsView(details);
  const popinView = buildPopin(popin);
  const titleView = buildTitle(title);

  const contentStyle = classNames([
    style.content,
    !isEmpty(notifications) && style.contentWithNotifications,
    contentFixHeight && style.contentFixHeight
  ]);

  return (
    <div className={style.container}>
      <div className={style.left}>{leftNavigation}</div>
      <div className={style.contentWrapper}>
        <div className={style.headerSticky}>{headerView}</div>
        <div className={contentStyle}>
          {notificationsView}
          {titleView}
          {tabsView}
          {contentView}
          {detailsView}
          {documentationView}
        </div>
      </div>
      {popinView}
    </div>
  );
};

BrandUpdate.defaultProps = {
  notifications: []
};

BrandUpdate.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      ...Banner.propTypes
    })
  ),
  header: PropTypes.oneOfType([
    PropTypes.shape({...Header.propTypes}),
    PropTypes.shape({
      ...HeaderWithActions.propTypes,
      type: PropTypes.oneOf(['header-with-actions']).isRequired
    })
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      type: PropTypes.string,
      tabs: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          selected: PropTypes.bool.isRequired,
          type: PropTypes.string,
          subTabs: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
              selected: PropTypes.bool.isRequired,
              type: PropTypes.string
            })
          )
        })
      )
    })
  ).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.shape({
      ...BrandForm.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['form'])
    }),
    PropTypes.shape({
      ...BrandTable.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['list'])
    }),
    PropTypes.shape({
      ...BrandUpload.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['upload'])
    }),
    PropTypes.shape({
      ...BrandAnalytics.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['analytics-dashboards'])
    }),
    PropTypes.shape({
      ...BrandDashboard.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['home'])
    }),
    PropTypes.shape({
      ...WizardContents.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['wizard'])
    }),
    PropTypes.shape({
      ...ListItems.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['list-content', 'expandible-actionable-table'])
    }),
    PropTypes.shape({
      ...BulkInfos.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['bulk-empty-dashboard'])
    }),
    PropTypes.shape({
      ...ExpandibleActionableTable.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['table-pending'])
    }),
    PropTypes.shape({
      ...WizardContents.propTypes,
      content: PropTypes.shape({
        ...ExpandibleActionableTable.propTypes,
        ...WizardContents.propTypes.content.propTypes
      }),
      key: PropTypes.string,
      type: PropTypes.oneOf(['expandible-table'])
    }),
    PropTypes.shape({
      ...BrandLearningPriorities.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['learning-priorities'])
    }),
    PropTypes.shape({
      ...SkillEdition.propTypes,
      key: PropTypes.string,
      type: PropTypes.oneOf(['skill-edition'])
    })
  ]),
  documentation: PropTypes.shape({
    content: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func
  }),
  popin: PropTypes.oneOfType([
    PropTypes.shape({
      ...CmPopin.propTypes,
      theme: PropTypes.oneOf(['published', 'archived', 'deleted'])
    }),
    PropTypes.shape({
      ...IconPickerModal.propTypes,
      type: PropTypes.oneOf(['icon-picker'])
    })
  ]),
  details: PropTypes.shape({
    ...BrandTable.propTypes,
    key: PropTypes.string,
    type: PropTypes.oneOf(['list'])
  }),
  onItemClick: PropTypes.func,
  contentFixHeight: PropTypes.bool,
  title: PropTypes.shape(Title.propTypes)
};

export default BrandUpdate;
