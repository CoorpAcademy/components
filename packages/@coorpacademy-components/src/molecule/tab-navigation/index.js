import React, {PropTypes, Component} from 'react';
import Tab from '../../atom/tab';
import BackToCatalogButton from '../../atom/back-to-catalog';
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
  const {tabs, activeContent, ...otherProps} = props;
  const ActiveContent = pages[activeContent];
  return (
    <div className={style.tabNavigation}>
      <div className={style.tabNavigationPanel}>
        <BackToCatalogButton {...otherProps}>
          {props.backToCatalogText}
        </BackToCatalogButton>
        {tabs.map(tab => (
          <Tab
            {...otherProps}
            {...tab}
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
