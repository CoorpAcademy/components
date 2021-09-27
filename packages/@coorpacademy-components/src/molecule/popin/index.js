import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';

import {
  NovaCompositionCoorpacademyLocales as LocalesIcon,
  NovaSolidStatusClose as Close,
  NovaLineContentEditionBin as Bin,
  NovaLineContentEditionHide as Hide
} from '@coorpacademy/nova-icons';
import Cta from '../../atom/button';
import Loader from '../../atom/loader';
import style from './style.css';

const Popin = (props, context) => {
  const {skin} = context;
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);
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

  const logo = {
    hiddenStateManagment: Hide,
    deleteContent: Bin,
    videoTranslate: LocalesIcon
  };

  const LogoComponent = logo[type];
  const backgroundImageStyle = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`
      }
    : {};

  const [value, setValue] = useState({object: '', message: ''});

  const handleChange = useMemo(() => event => {
    setValue({...value, [event.target.name]: event.target.value});
  });

  const isAssistancePopin = type === 'assistance';

  const handleClickOnSecondButton = useMemo(() => {
    return type === 'assistance' ? onSecondeButtonClick(value) : onSecondeButtonClick;
  }, [value]);

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
          {LogoComponent ? (
            <LogoComponent className={style.icon} style={{color: primaryColor}} />
          ) : null}
          <div className={style.header} data-name={`cockpit-popin-header-${type}`}>
            {header}
          </div>
          <p
            className={style.content}
            data-name={`cockpit-popin-content-${type}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />

          {isAssistancePopin ? (
            <div style={{width: '70%'}}>
              <input
                className={style.inputText}
                name="object"
                type="text"
                placeholder="Object"
                value={value.object}
                onChange={handleChange}
              />
              <textarea
                className={(style.inputText, style.inputTextArea)}
                name="message"
                type="text"
                placeholder="Message"
                value={value.message}
                onChange={handleChange}
              />
            </div>
          ) : null}

          <div className={style.buttonContainer}>
            {firstButtonLabel ? (
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
            ) : null}
            {secondeButtonLabel ? (
              <Cta
                submitValue={secondeButtonLabel}
                onClick={handleClickOnSecondButton}
                name={`cockpit-popin-cta-${type}`}
                className={style.button}
                style={{backgroundColor: primaryColor}}
                disabled={isAssistancePopin && !value.message}
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

Popin.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  firstButtonLabel: PropTypes.string,
  onFirstButtonClick: PropTypes.func,
  secondeButtonLabel: PropTypes.string,
  onSecondeButtonClick: PropTypes.func,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['videoTranslate', 'hiddenStateManagment', 'deleteContent', 'assistance']),
  isLoading: PropTypes.bool,
  backgroundImageUrl: PropTypes.string
};

export default Popin;
