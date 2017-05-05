import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../../molecule/breadcrumbs';
import BrandTabs from '../../../molecule/brand-tabs';
import BrandSso from '../../../organism/brand-sso';
import Layout from '../layout';
import style from './style.css';

const CreateSso = Layout(props => {
  const {links, breadcrumbs, tabs, mysso} = props;

  return (
    <div className={style.container}>
      <div className={style.headerWrapper}>
        <Breadcrumbs links={links} breadcrumbs={breadcrumbs} />
      </div>
      <div className={style.tabsWrapper}>
        <BrandTabs tabs={tabs} />
      </div>
      <div className={style.contentWrapper}>
        <BrandSso {...mysso} />
      </div>
    </div>
  );
});

CreateSso.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  mysso: PropTypes.object,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      type: PropTypes.string
    })
  )
};

export default CreateSso;
