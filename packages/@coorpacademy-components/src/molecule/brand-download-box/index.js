import React from 'react';
import PropTypes from 'prop-types';
import {NovaSolidInterfaceFeedbackInterfaceAlertCircle as AlertIcon} from '@coorpacademy/nova-icons';
import {get} from 'lodash/fp';
import ButtonLink from '../../atom/button-link';
import Provider from '../../atom/provider';
import style from './style.css';

const BrandDownloadBox = (props, context) => {
  const {title = '', warning = '', description = '', href = '', onClick, submitValue = ''} = props;
  const {skin} = context;
  const negativeColor = get('common.negative', skin);

  const type = warning ? (
    <div className={style.texts}>
      <AlertIcon className={style.icon} style={{color: negativeColor}} />
      <span className={style.warning}>{warning}</span>
      <p className={style.description}>{description}</p>
    </div>
  ) : (
    <div className={style.titleTexts}>
      <span className={style.title}>{title}</span>
      <p className={style.description}>{description}</p>
    </div>
  );

  return (
    <div className={style.wrapper}>
      {type}
      <ButtonLink
        className={style.button}
        link={{href, download: true}}
        onClick={onClick}
        label={submitValue}
        customStyle={{backgroundColor: '#FFA000', color: 'white'}}
      />
    </div>
  );
};

BrandDownloadBox.contextTypes = {
  skin: Provider.childContextTypes.skin
};

BrandDownloadBox.propTypes = {
  title: PropTypes.string,
  warning: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  submitValue: PropTypes.string
};

export default BrandDownloadBox;
