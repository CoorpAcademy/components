import React from 'react';
import Hero from '../../../molecule/hero';
import PrivacyPolicyContact from '../../../molecule/privacy-policy-contact';
import MenuLinks from '../../../molecule/menu-links';
import ExpandableList from '../../../molecule/expandable-list';
import {propTypes, Props} from './types';
import styles from './style.css';

const PrivacyPolicy = ({header, privacyPolicyContact, menuLinks, expandableList}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <Hero {...header} mode={'header'} />
      </div>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <div className={styles.menueLinksDesctop}>
            <MenuLinks {...menuLinks} isDesktopMode />
          </div>
          <div className={styles.menueLinksMobile}>
            <MenuLinks {...menuLinks} isDesktopMode={false} />
          </div>
        </div>
        <div className={styles.expandableList}>
          <ExpandableList {...expandableList} />
        </div>
      </div>
      <div className={styles.privacyPolicyContact}>
        <PrivacyPolicyContact {...privacyPolicyContact} />
      </div>
    </div>
  );
};

PrivacyPolicy.propTypes = propTypes;

export default PrivacyPolicy;
