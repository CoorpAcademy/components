import React from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaCompositionNavigationArrowLeft as ChevronLeftIcon,
  NovaCompositionNavigationArrowRight as ChevronRightIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const ICONS = {
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon
};

const CMButton = props => {
  const {type, label, icon} = props;
  const Icon = getOr(null, icon, ICONS);

  return (
    <div
      className={classnames(
        style.button,
        type === 'primary' && style.primary,
        type === 'secondary' && style.secondary,
        type === 'tertiary' && style.tertiary,
        type === 'text' && style.text
      )}
    >
      {icon.position === 'left' ? <Icon /> : null}
      {label}
      {icon.position === 'right' ? <Icon /> : null}
    </div>
  );
};

CMButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text']),
  label: PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left']),
    type: PropTypes.string
  }),
  onClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  })
};

export default CMButton;
