import React from 'react';
import {map} from 'lodash/fp';
import ButtonLinkIcon from '../../../atom/button-link-icon';
import PrivacyPolicyContact from '../../../molecule/privacy-policy-contact';
import {propTypes, Props, SubArticle} from './types';
import styles from './style.css';

// @ts-expect-error (need to get the index)
const mapWithIndex = map.convert({cap: false});

const FAQArticlePage = ({
  title,
  backButton,
  backButtonText,
  subArticles,
  privacyPolicyContact
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.backContainer}>
            <ButtonLinkIcon {...backButton} />
            <span>{backButtonText}</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          {mapWithIndex((item: SubArticle, index: number) => {
            return (
              <div className={styles.article} key={`${item.text}${index}`}>
                <h3 className={styles.subTitle}>{item.subTitle}</h3>
                <div
                  className={styles.text}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{__html: item.text}}
                />
                <img className={styles.img} src={item.image} alt="" />
              </div>
            );
          }, subArticles)}
          <div className={styles.backContainerMobile}>
            <ButtonLinkIcon {...backButton} />
            <span>{backButtonText}</span>
          </div>
        </div>
      </div>
      <div className={styles.privacyPolicyContact}>
        <PrivacyPolicyContact {...privacyPolicyContact} />
      </div>
    </div>
  );
};

FAQArticlePage.propTypes = propTypes;

export default FAQArticlePage;
