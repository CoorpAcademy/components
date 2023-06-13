import React from 'react';
import {map} from 'lodash/fp';
import Hero from '../../../molecule/hero';
import PrivacyPolicyContact from '../../../molecule/privacy-policy-contact';
import QuickAccessCard from '../../../molecule/quick-access-card';
import {propTypes, Props} from './types';
import styles from './style.css';

const FAQCardsPage = ({
  header,
  privacyPolicyContact,
  quickAccessList,
  title,
  description
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <Hero {...header} mode={'header'} />
      </div>
      <div className={styles.container}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <h6 className={styles.description}>{description}</h6>
        </div>
        <div>
          <div className={styles.group}>
            {map(item => {
              return (
                <div className={styles.card} key={`card-quick-access-faq-${item.title}`}>
                  <QuickAccessCard {...item} />
                </div>
              );
            }, quickAccessList)}
          </div>
        </div>
      </div>
      <div className={styles.privacyPolicyContact}>
        <PrivacyPolicyContact {...privacyPolicyContact} />
      </div>
    </div>
  );
};

FAQCardsPage.propTypes = propTypes;

export default FAQCardsPage;
