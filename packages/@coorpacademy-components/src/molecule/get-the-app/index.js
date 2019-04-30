/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyMagicWand as MagicWand} from '@coorpacademy/nova-icons';
import Button from '../../atom/button';
import style from './style.css';

const Header = ({title, subTitle}) => {
  return (
    <div className={style.headerContainer}>
      <p className={style.headerTitle} dangerouslySetInnerHTML={{__html: title}} />
      {subTitle && (
        <p className={style.headerSubTitle} dangerouslySetInnerHTML={{__html: subTitle}} />
      )}
    </div>
  );
};

const QrCodeImage = ({url}) => {
  return (
    <div className={style.qrCodeImageWrapper}>
      <img src={url} />
    </div>
  );
};

const MagicLink = ({disabled, submitValue, url}) => {
  return (
    <div className={style.buttonWrapper}>
      <Button disabled={disabled} href={url} type="a" submitValue={null}>
        <div className={style.iconWrapper}>
          <MagicWand className={style.magicLinkIcon} />
          <p>{submitValue}</p>
        </div>
      </Button>
    </div>
  );
};

const StoresLinks = ({
  onAppStoreButtonClick,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  onPlayStoreButtonClick
}) => {
  return (
    <div className={style.storeLinksContainer}>
      <img className={style.img} src={appStoreButtonImageUrl} onClick={onAppStoreButtonClick} />
      <img className={style.img} src={playStoreButtonImageUrl} onClick={onPlayStoreButtonClick} />
    </div>
  );
};

const Divider = ({word}) => (
  <div className={style.dividerWrapper}>
    <div className={style.divider} />
    <p>{word}</p>
    <div className={style.divider} />
  </div>
);

const GetTheApp = ({
  onAppStoreButtonClick,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  onPlayStoreButtonClick,
  step1Title,
  step1SubTitle,
  step2Title,
  qrCodeTitle,
  magicLinkTitle,
  diviserWord,
  qrCodeImageUrl,
  magicLinkUrl,
  disabled,
  submitValue,
  onMagicLinkButtonClick
}) => {
  return (
    <div className={style.container}>
      <div className={style.store}>
        <Header title={step1Title} subTitle={step1SubTitle} />
        <StoresLinks
          onAppStoreButtonClick={onAppStoreButtonClick}
          appStoreButtonImageUrl={appStoreButtonImageUrl}
          playStoreButtonImageUrl={playStoreButtonImageUrl}
          onPlayStoreButtonClick={onPlayStoreButtonClick}
        />
      </div>
      <div className={style.secondStepWrapper}>
        <Header title={step2Title} />
        <div className={style.connectionWrapper}>
          <div className={style.wrapper}>
            <Header title={qrCodeTitle} />
            <QrCodeImage url={qrCodeImageUrl} />
          </div>
          <Divider word={diviserWord} />
          <div className={style.wrapper}>
            <Header title={magicLinkTitle} />
            <MagicLink
              onSubmit={onMagicLinkButtonClick}
              submitValue={submitValue}
              disabled={disabled}
              url={magicLinkUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GetTheApp.propTypes = {
  onAppStoreButtonClick: PropTypes.func,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  onPlayStoreButtonClick: PropTypes.func,
  step1Title: PropTypes.string,
  step1SubTitle: PropTypes.string,
  step2Title: PropTypes.string,
  qrCodeTitle: PropTypes.string,
  magicLinkTitle: PropTypes.string,
  diviserWord: PropTypes.string,
  qrCodeImageUrl: PropTypes.string,
  magicLinkUrl: PropTypes.string,
  disabled: PropTypes.bool,
  submitValue: PropTypes.string,
  onMagicLinkButtonClick: PropTypes.func
};

export default GetTheApp;
