import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import ToolTip from '../../atom/tooltip';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const Settings = (props, legacyContext) => {
  const translate = GetTranslateFromContext(legacyContext);
  const {label, description, moreInfoAriaLabel, ...settings} = props;
  return (
    <div className={style.settings}>
      <InputSwitch {...settings} />
      <span className={style.label} tabIndex={0}>
        {label}
      </span>
      {isEmpty(description) ? null : (
        <ToolTip
          TooltipContent={description}
          closeToolTipInformationTextAriaLabel={translate(
            'Press the escape key to close the information text'
          )}
          data-testid="user-preferences-tooltip"
          aria-label={moreInfoAriaLabel}
          iconContainerClassName={style.infoIconTooltip}
          fontSize={12}
        />
      )}
    </div>
  );
};

Settings.propTypes = {
  ...InputSwitch.propTypes,
  label: PropTypes.string.isRequired,
  description: PropTypes.string
};

Settings.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const UserPreferences = props => {
  const {preferences, moreInfoAriaLabel, groupAriaLabel} = props;

  return (
    <form>
      <div className={style.preferences} role="group" aria-label={groupAriaLabel} tabIndex={0}>
        {map(
          settings => (
            <Settings {...settings} key={settings.label} moreInfoAriaLabel={moreInfoAriaLabel} />
          ),
          preferences
        )}
      </div>
    </form>
  );
};

UserPreferences.propTypes = {
  preferences: PropTypes.arrayOf(PropTypes.shape(Settings.propTypes)),
  moreInfoAriaLabel: PropTypes.string,
  groupAriaLabel: PropTypes.string
};

export default UserPreferences;
