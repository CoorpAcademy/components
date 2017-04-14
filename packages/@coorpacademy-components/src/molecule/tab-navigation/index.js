import React, {PropTypes, Component} from 'react';
import map from 'lodash/fp/map';
import Tab from '../../atom/tab';
import TabContent from '../../atom/tab-content';
import SubscriptionPremiumDetails from '../subscription-details/premium';
import SubscriptionFreemiumDetails from '../subscription-details/freemium';
import Unsubscribe from '../unsubscribe';
import style from './style.css';

const pages = {
  'my-subscription': SubscriptionPremiumDetails,
  subscribe: SubscriptionFreemiumDetails,
  unsubscribe: Unsubscribe
};

const TabNavigation = props => {
  const {tabs, onTabClick, activeContent, ...otherProps} = props;
  const ActiveContent = pages[activeContent];
  return (
    <div className={style.tabNavigation}>
      <div className={style.tabNavigationPanel}>
        <div
          className={style.backToCatalogButton}
          onClick={props.onBackToCatalogButtonClick}
        >
          {props.translations.backToCatalogText}
        </div>
        {map(tabs, tab => (
          <Tab
            {...otherProps}
            {...tab}
            onClick={onTabClick}
            key={tab.key}
            active={tab.key === activeContent}
          />
        ))}
      </div>
      <TabContent
        activeContent={activeContent}
        {...otherProps}
      >
        <ActiveContent {...otherProps} />
      </TabContent>
    </div>
  );
};

export default TabNavigation;
