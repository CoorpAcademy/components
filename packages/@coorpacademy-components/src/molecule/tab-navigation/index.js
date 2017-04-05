import React, {PropTypes, Component} from 'react';
import Tab from '../../atom/tab';
import BackToCatalogButton from '../../atom/back-to-catalog';
import TabContent from '../../atom/tab-content';
import SubscriptionFreemiumDetails from '../subscription-details/freemium';
import Unsubscribe from '../unsubscribe';

const pages = {
  subscribe: SubscriptionFreemiumDetails,
  unsubscribe: Unsubscribe
};

const TabNavigation = props => {
  const {tabs, activeTab, ...otherProps} = props;
  const ActiveContent = pages[activeTab];
  return (
    <div>
      <div>
        <BackToCatalogButton {...otherProps} />
        {tabs.map(tab => (
          <Tab
            {...otherProps}
            {...tab}
            key={tab.key}
            tabKey={tab.key}
            active={tab.key === activeTab}
          />
        ))}
      </div>
      <TabContent activeTab={activeTab} {...otherProps}>
        <ActiveContent {...otherProps} />
      </TabContent>
    </div>
  );
};

export default TabNavigation;
