import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyReload as ReloadIcon,
  NovaCompositionCoorpacademyLoginFaild as LoginFailedIcon,
  NovaCompositionCoorpacademyAddressError as AddreessErrorIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const ICONS = {
  loginFailed: LoginFailedIcon,
  addressError: AddreessErrorIcon,
  reload: ReloadIcon,
  wrong: ReloadIcon
};

const TeamsPopin = props => {
  const {header, content, buttonLabel, onButtonClick, type} = props;
  const IconType = ICONS[type];
  const Icon = IconType ? (
    <div className={style.iconContainer}>
      <IconType className={style.icon} />
    </div>
  ) : null;

  return (
    <div className={style.background}>
      <div className={style.popin}>
        {Icon}
        <div className={style.header} data-name="popin-header">
          {header}
        </div>
        <p className={style.content}>{content}</p>
        {buttonLabel && onButtonClick ? (
          <div className={style.buttonContainer}>
            <button className={style.button} type="button" onClick={onButtonClick}>
              {buttonLabel}
            </button>
          </div>
        ) : null}
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

export default TeamsPopin;
