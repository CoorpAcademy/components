import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyReload as ReloadIcon,
  NovaSolidStatusClose as Close
} from '@coorpacademy/nova-icons';
import Cta from '../../atom/button';
import Loader from '../../atom/loader';
import style from './style.css';

const ICONS = {
  videoTranslate: ReloadIcon
};

const CockpitPopin = props => {
  const {
    header,
    content,
    firstButtonLabel,
    onFirstButtonClick,
    secondeButtonLabel,
    onSecondeButtonClick,
    onClose,
    type,
    isLoading = false,
    backgroundImageUrl
  } = props;
  const IconType = ICONS[type];

  const backgroundImageStyle = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover'
      }
    : {};

  return (
    <div className={style.background} style={backgroundImageStyle}>
      {isLoading ? (
        <div className={style.loader}>
          <Loader data-name="cockpit-popin-loader" />
        </div>
      ) : (
        <div className={style.popin}>
          <header className={style.popinHeader}>
            <Close onClick={onClose} className={style.headerCloseIcon} />
          </header>
          <IconType className={style.icon} />
          <div className={style.header} data-name={`cockpit-popin-header-${type}`}>
            {header}
          </div>
          <p className={style.content} data-name={`cockpit-popin-content-${type}`}>
            {content}
          </p>
          {firstButtonLabel && secondeButtonLabel ? (
            <div className={style.buttonContainer}>
              <Cta
                submitValue={firstButtonLabel}
                onClick={onFirstButtonClick}
                name={`cockpit-popin-cta-${type}`}
                className={style.button}
                style={{backgroundColor: '#FFFFFF', color: '#546e7a'}}
              />
              <Cta
                submitValue={secondeButtonLabel}
                onClick={onSecondeButtonClick}
                name={`cockpit-popin-cta-${type}`}
                className={style.button}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

CockpitPopin.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  firstButtonLabel: PropTypes.string,
  onFirstButtonClick: PropTypes.func,
  secondeButtonLabel: PropTypes.string,
  onSecondeButtonClick: PropTypes.func,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['videoTranslate']),
  isLoading: PropTypes.bool,
  backgroundImageUrl: PropTypes.string
};

export default CockpitPopin;
