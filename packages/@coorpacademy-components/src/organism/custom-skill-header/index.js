import React from 'react';
import PropTypes from 'prop-types';
import ButtonLinkIcon from '../../atom/button-link-icon';
import style from './style.css';

const CustomSkillHeader = props => {
  const {onQuitClick, title} = props;

  const closeButtonProps = {
    size: 'default',
    icon: 'close',
    'data-name': 'custom-skill-header-close-button',
    'aria-label': 'close-button-aria-label',
    onClick: onQuitClick
  };

  return (
    <div className={style.customSkillHeader} data-name="custom-skill-header">
      <ButtonLinkIcon {...closeButtonProps} />
      <h3 className={style.title} aria-label={title} data-name="custom-skill-header-title">
        {title}
      </h3>
    </div>
  );
};

CustomSkillHeader.propTypes = {
  onQuitClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default CustomSkillHeader;
