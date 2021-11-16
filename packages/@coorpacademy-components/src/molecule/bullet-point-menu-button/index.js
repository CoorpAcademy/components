import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const BulletPointMenuButton = props => {
  const {key, disabled = false, buttonAriaLabel, menuAriaLabel, onClick, menuButtonsProps} = props;
  const {actionButton, deleteButton} = menuButtonsProps;

  const actionButtonProps = {
    type: 'secondary-flat',
    'aria-label': actionButton.label,
    'data-name': `menu-${actionButton.actionType}-button`,
    label: actionButton.label,
    onClick: actionButton.onClick
  };

  const deleteButtonProps = {
    type: 'secondary-flat-delete',
    'aria-label': deleteButton.label,
    'data-name': 'menu-delete-button',
    label: deleteButton.label,
    onClick: deleteButton.onClick
  };

  const menu = (
    <div key={`${key}-bullet-point-menu`} data-name="bullet-point-menu" className={style.bulletPointMenu} aria-label={menuAriaLabel}>
      <ButtonLink {...actionButtonProps} />
      <ButtonLink {...deleteButtonProps} />
    </div>
  );
  const bulletPointButtonProps = {
    type: 'secondary',
    'aria-label': buttonAriaLabel,
    'data-name': 'bullet-point-button',
    icon: {
      position: 'center',
      type: 'bullet-point'
    },
    onClick,
    disabled
  };

  return (
    <div className={style.bulletPointWrapper} data-name="bullet-point-wrapper" key={key}>
      <ButtonLink {...bulletPointButtonProps} className={style.bulletPointButton} />
      {menu}
    </div>
  );
};

BulletPointMenuButton.propTypes = {
  disabled: PropTypes.bool,
  buttonAriaLabel: PropTypes.string,
  menuAriaLabel: PropTypes.string,
  menuButtonsProps: PropTypes.shape({
    actionButton: PropTypes.shape({
      actionType: PropTypes.oneOf(['publish', 'archive']),
      label: PropTypes.string,
      onClick: PropTypes.func
    }),
    deleteButton: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    })
  }),
  onClick: PropTypes.func,
  // provide a key for rendering performance
  key: PropTypes.string
};

export default BulletPointMenuButton;
