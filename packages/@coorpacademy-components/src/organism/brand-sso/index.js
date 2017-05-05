import React from 'react';
import PropTypes from 'prop-types';
import UploadBox from '../../molecule/brand-upload-box';
import DownloadBox from '../../molecule/brand-download-box';
import Button from '../../atom/button';
import InputSwitch from '../../atom/input-switch';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import style from './style.css';

const BrandSso = (props, context) => {
  const {
    mainTitle = '',
    mainDescription = '',
    instruction = '',
    providerTitle = '',
    download,
    upload,
    settingTitle = '',
    settingDesc = '',
    exportTitle = '',
    exportDesc = '',
    uploadTitle = '',
    uploadDesc = '',
    connectionTitle = '',
    ssoConnection,
    attributeTitle = '',
    attributeDesc = '',
    activateTitle = '',
    activate,
    advancedOptions,
    forceAuthorization,
    disableRequest,
    skew,
    skewDesc,
    algorithm,
    rsa1,
    rsa2,
    rsa3,
    binding,
    httppost,
    httpredirect,
    login,
    email,
    fname,
    lname,
    aprovider,
    language,
    country,
    mandatory
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h3>{mainTitle}</h3>
        <p>{mainDescription}</p>
        <span>{instruction}</span>
      </div>
      <div className={style.subWrapper}>
        <h3>{providerTitle}</h3>
        {download && <DownloadBox {...download} />}
      </div>
      <div className={style.subWrapper}>
        <h3>{settingTitle}</h3>
        <p>{settingDesc}</p>
      </div>
      <div className={style.subWrapper}>
        <h3>{exportTitle}</h3>
        <p>{exportDesc}</p>
      </div>
      <div className={style.subWrapper}>
        <h3>{uploadTitle}</h3>
        <p>{uploadDesc}</p>
        <UploadBox {...upload} />
      </div>
      <div className={style.subWrapper}>
        <h3>{connectionTitle}</h3>
        <Button {...ssoConnection} />
      </div>
      <div className={style.subWrapper}>
        <h3>{attributeTitle}</h3>
        <p>{attributeDesc}</p>
        <div className={style.subtitles}>
          <span>Coorpacademy Attribute</span>
          <span>Company’s Attribute Name</span>
        </div>
        <span className={style.mandatory}>
          <InputText {...login} />
          <InputText {...email} />
        </span>
        <InputText {...fname} />
        <InputText {...lname} />
        <InputText {...aprovider} />
        <InputText {...language} />
        <InputText {...country} />
        <span className={style.mandatory}>{mandatory}</span>
      </div>
      <div className={style.subWrapper}>
        <h3>{activateTitle}</h3>
        <InputSwitch {...activate} />
      </div>
      <div className={style.subWrapper}>
        <h3>{advancedOptions}</h3>
        <div className={style.algorithm}>
          <span>{algorithm}</span>
          <InputCheckbox {...rsa1} />
          <InputCheckbox {...rsa2} />
          <InputCheckbox {...rsa3} />
        </div>
        <div className={style.skew}>
          <InputText {...skew} />
          <span className={style.skewDesc}>{skewDesc}</span>
        </div>
        <div className={style.binding}>
          <span>{binding}</span>
          <InputCheckbox {...httppost} />
          <InputCheckbox {...httpredirect} />
        </div>
        <InputSwitch {...forceAuthorization} />
        <InputSwitch {...disableRequest} />
      </div>
      <div className={style.validate}>
        <Button />
      </div>
    </div>
  );
};

BrandSso.propTypes = {
  mainTitle: PropTypes.string,
  mainDescription: PropTypes.string,
  instruction: PropTypes.string,
  providerTitle: PropTypes.string,
  download: PropTypes.object,
  upload: PropTypes.object.isRequired,
  settingTitle: PropTypes.string,
  settingDesc: PropTypes.string,
  exportTitle: PropTypes.string,
  exportDesc: PropTypes.string,
  uploadTitle: PropTypes.string,
  uploadDesc: PropTypes.string,
  connectionTitle: PropTypes.string,
  ssoConnection: PropTypes.object,
  attributeTitle: PropTypes.string,
  attributeDesc: PropTypes.string,
  activateTitle: PropTypes.string,
  activate: PropTypes.object,
  advancedOptions: PropTypes.string,
  forceAuthorization: PropTypes.object,
  disableRequest: PropTypes.object,
  skew: PropTypes.object,
  skewDesc: PropTypes.string,
  algorithm: PropTypes.string,
  rsa1: PropTypes.string,
  rsa2: PropTypes.string,
  rsa3: PropTypes.string,
  binding: PropTypes.string,
  httppost: PropTypes.string,
  httpredirect: PropTypes.string,
  login: PropTypes.string,
  email: PropTypes.string,
  fname: PropTypes.string,
  lname: PropTypes.string,
  aprovider: PropTypes.string,
  language: PropTypes.string,
  country: PropTypes.string,
  mandatory: PropTypes.string
};

export default BrandSso;
