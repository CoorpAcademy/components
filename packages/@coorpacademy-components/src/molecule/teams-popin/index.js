import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyReload as ReloadIcon,
  NovaCompositionCoorpacademyLoginFaild as LoginFailedIcon,
  NovaCompositionCoorpacademyAddressError as AddreessErrorIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const Icon = props => {
  const {type} = props;
  switch (type) {
    case 'reload':
      return (
        <div className={style.iconContainer}>
          <ReloadIcon className={style.icon} />
        </div>
      );
    case 'wrong':
      return (
        <div className={style.iconContainer}>
          <ReloadIcon className={style.icon} />
        </div>
      );
    case 'addressError':
      return (
        <div className={style.iconContainer}>
          <AddreessErrorIcon className={style.icon} />
        </div>
      );
    case 'loginFailed':
      return (
        <div className={style.iconContainer}>
          <LoginFailedIcon className={style.icon} />
        </div>
      );
    default:
      return null;
  }
};

const TeamsPopin = props => {
  const {header, content, buttonLabel, onButtonClick, type} = props;
  return (
    <div className={style.wrapmessage}>
      <div className={style.disable}>
        <div className={style.popin}>
          <Icon type={type} />
          <div className={style.header} data-name="popin-header">
            {header}
          </div>
          <div className={style.content}>
            <p>{content}</p>
          </div>
          {buttonLabel && onButtonClick ? (
            <div className={style.buttonContainer}>
              <button className={style.button} type="button" onClick={onButtonClick}>
                {buttonLabel}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

TeamsPopin.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  type: PropTypes.oneOf(['reload', 'loginFailed', 'addressError', 'wrong'])
};

Icon.propTypes = {
  type: TeamsPopin.propTypes.type
};
export default TeamsPopin;
