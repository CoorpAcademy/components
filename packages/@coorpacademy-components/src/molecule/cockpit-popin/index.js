import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';

import {
  NovaCompositionCoorpacademyLocales as LocalesIcon,
  NovaSolidStatusClose as Close
} from '@coorpacademy/nova-icons';
import Cta from '../../atom/button';
import Loader from '../../atom/loader';
import style from './style.css';

const CockpitPopin = (props, context) => {
  const {skin} = context;
  const primaryColor = get('common.primary', skin);
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

  const backgroundImageStyle = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`
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
          <LocalesIcon className={style.icon} style={{color: primaryColor}} />
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
                style={{
                  backgroundColor: 'white',
                  color: 'gray'
                }}
              />
              <Cta
                submitValue={secondeButtonLabel}
                onClick={onSecondeButtonClick}
                name={`cockpit-popin-cta-${type}`}
                className={style.button}
                style={{backgroundColor: primaryColor}}
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
