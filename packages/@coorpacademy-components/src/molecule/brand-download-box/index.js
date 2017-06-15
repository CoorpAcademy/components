import React from 'react';
import PropTypes from 'prop-types';
import AlertIcon from '@coorpacademy/nova-icons/solid/interface-feedback/interface-alert-circle';
import getOr from 'lodash/fp/getOr';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import style from './style.css';

const BrandDownloadBox = (props, context) => {
  const {title = '', warning = '', description = '', href = '', submitValue = ''} = props;
  const {skin} = context;
  const negativeColor = getOr('#F73F52', 'common.negative', skin);

  const type = warning
    ? <div className={style.texts}>
        <AlertIcon className={style.icon} color={negativeColor} />
        <span className={style.warning}>{warning}</span>
        <p className={style.description}>{description}</p>
      </div>
    : <div className={style.titleTexts}>
        <span className={style.title}>{title}</span>
        <p className={style.description}>{description}</p>
      </div>;

  return (
    <div className={style.wrapper}>
      {type}
      <Button className={style.button} type="a" href={href} submitValue={submitValue} />
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
  submitValue: PropTypes.string
};

export default BrandDownloadBox;
