import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';

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
  const { translate } = context;
  const {tabs, onTabClick, activeContent, ...otherProps} = props;
  const ActiveContent = pages[activeContent];

  return (
    <div className={style.settings}>
      <div className={style.tabNavigation}>
        <div className={style.tabNavigationPanel}>
          <Link
            className={style.backToCatalogButton}
            href={props.moocUrl}
          >
            {translate('back_to_catalog')}
          </Link>
          {map(tab => (
            <Tab
              {...otherProps}
              {...tab}
              onClick={onTabClick}
              key={tab.key}
              active={tab.key === activeContent}
            />
          ), tabs)}
        </div>
        <TabContent
          activeContent={activeContent}
          {...otherProps}
        >
          <ActiveContent {...otherProps} />
        </TabContent>
      </div>
    </div>
  );
};

Settings.contextTypes = {
  translate: PropTypes.func
};

Settings.propTypes = {
  moocUrl: PropTypes.string
};

export default Settings;
