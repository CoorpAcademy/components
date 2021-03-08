import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyReload as ReloadIcon,
  NovaCompositionCoorpacademyLoginFailed as LoginFailedIcon,
  NovaCompositionCoorpacademyAddressError as AddressErrorIcon,
  NovaCompositionCoorpacademySchoolGraduation as SchoolGraduation
} from '@coorpacademy/nova-icons';
import Cta from '../../atom/cta';
import Loader from '../../atom/loader';
import style from './style.css';

const ICONS = {
  login: SchoolGraduation,
  loginFailed: LoginFailedIcon,
  addressError: AddressErrorIcon,
  reload: ReloadIcon,
  wrong: ReloadIcon
};

const TeamsPopin = props => {
  const {
    header,
    content,
    buttonLabel,
    aboutLabel,
    onButtonClick,
    type,
    isLoading = false,
    backgroundImageUrl
  } = props;
  const IconType = ICONS[type];
  const iconContainerStyle = type === 'login' ? style.iconContainer : style.errorIconContainer;
  const Icon = IconType ? (
    <div className={iconContainerStyle}>
      <IconType className={style.icon} />
    </div>
  ) : null;
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
          <Loader data-name="teams-popin-loader" />
        </div>
      ) : (
        <div className={style.popin}>
          {Icon}
          <div
            className={style.header}
            data-name={`popin-header-${type}`} // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: header}}
          />
          <p
            className={style.content}
            data-name={`popin-content-${type}`} // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />
          {buttonLabel && onButtonClick ? (
            <div className={style.buttonContainer}>
              <Cta submitValue={buttonLabel} onClick={onButtonClick} name={`popin-cta-${type}`} />
            </div>
          ) : null}
          {aboutLabel ? (
            <p
              className={style.content}
              data-name={`popin-about-label-${type}`} // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: aboutLabel}}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

TeamsPopin.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  buttonLabel: PropTypes.string,
  aboutLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  type: PropTypes.oneOf(['login', 'reload', 'loginFailed', 'addressError', 'wrong']),
  isLoading: PropTypes.bool,
  backgroundImageUrl: PropTypes.string
};

export default TeamsPopin;
