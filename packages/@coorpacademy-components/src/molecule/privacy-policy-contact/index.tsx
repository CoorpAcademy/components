import React from 'react';
import {NovaCompositionNavigationArrowDown as ArrowIcon} from '@coorpacademy/nova-icons';
import {propTypes, Props} from './types';
import styles from './style.css';

export const ICONS = {
  arrow: ArrowIcon
};

const PrivacyPolicyContact = ({title, content}: Props) => {
  return (
    <div className={styles.container}>
      <div
        classNظame={styles.title}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

PrivacyPolicyContact.propTypes = propTypes;

export default PrivacyPolicyContact;
