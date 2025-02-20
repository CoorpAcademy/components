import React from 'react';
import PropTypes from 'prop-types';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Tag from '../../atom/tag';
import style from './style.css';

const CustomSkillHeader = props => {
  const {onQuitClick, title, tag} = props;

  const closeButtonProps = {
    size: 'default',
    icon: 'close',
    'data-name': 'custom-skill-header-close-button',
    'aria-label': 'close-button-aria-label',
    onClick: onQuitClick
  };

  return (
    <div className={style.customSkillHeader} data-name="custom-skill-header">
      <ButtonLinkIcon {...closeButtonProps} className={style.button} />
      <div className={style.titleWrapper}>
        <Tag {...tag} className={style.tag} />
        <h3 className={style.title} aria-label={title} data-name="custom-skill-header-title">
          {title}
        </h3>
      </div>
    </div>
  );
};

CustomSkillHeader.propTypes = {
  onQuitClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.shape(Tag.propTypes).isRequired
};

export default CustomSkillHeader;
