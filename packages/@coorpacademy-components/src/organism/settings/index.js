import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import Tab from '../../atom/tab';
import TabContent from '../../atom/tab-content';
import SubscriptionPremiumDetails from '../../molecule/subscription-premium';
import SubscriptionFreemiumDetails from '../../molecule/subscription-freemium';
import Unsubscribe from '../../molecule/unsubscribe';

import style from './style.css';

const pages = {
  'my-subscription': SubscriptionPremiumDetails,
  subscribe: SubscriptionFreemiumDetails,
  unsubscribe: Unsubscribe
};

const Settings = (props, context) => {
  const {translate} = context;
  const {tabs, onTabClick, activeContent, ...otherProps} = props;
  const {moocUrl} = otherProps;
  const ActiveContent = pages[activeContent];

  return (
    <div className={style.settings}>
      <div className={style.tabNavigation}>
        <div className={style.tabNavigationPanel}>
          <Link className={style.backToCatalogButton} href={moocUrl}>
            {translate('back_to_catalog')}
          </Link>
          {map(
            tab => (
              <Tab
                {...otherProps}
                {...tab}
                onClick={onTabClick}
                key={tab.key}
                active={tab.key === activeContent}
              />
            ),
            tabs
          )}
        </div>
        <TabContent {...otherProps} activeContent={activeContent}>
          <ActiveContent {...otherProps} />
        </TabContent>
      </div>
    </div>
  );
};

Settings.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Settings.propTypes = {
  ...Tab.propTypes,
  ...TabContent.propTypes,
  moocUrl: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape(Tab.propTypes)),
  onTabClick: Tab.propTypes.onClick,
  activeContent: PropTypes.string
};

export default Settings;
