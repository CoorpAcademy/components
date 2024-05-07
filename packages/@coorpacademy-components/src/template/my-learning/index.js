import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { convert } from 'css-color-function';
import { getOr } from 'lodash/fp';
import style from './style.css';
import Provider from '../../atom/provider';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';

const ChangeSkillFocusButton = (props, context) => {
  const [hovered, setHovered] = useState(false);
  const { onClick } = props;
  const { skin, translate } = context;
  const primarySkinColor = getOr('#0061FF', 'common.primary', skin);


  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const buttonProps = {
    customStyle: {
      backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
      color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onClick,
    label: translate('change_skill_focus'),
    'data-name': 'change-skill-focus-button',
    icon: {
      position: 'left',
      faIcon: {
        name: 'arrows-rotate',
        backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
        color: hovered ? '#FFFFFF' : primarySkinColor,
        size: 16
      }
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-name="button-explore-wrapper"
    >
      <ButtonLink {...buttonProps} />
    </div>
  );
}

ChangeSkillFocusButton.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ChangeSkillFocusButton.propTypes = {
  onClick: PropTypes.func
};

const MyLearning = (props, context) => {
  const { translate } = context;

  return (
    <div className={style.container}>
      <div className={style.skillFocusContainer}>
        <header className={style.skillFocusHeader}>
          <div className={style.skillFocusHeaderIcon}>
            <Icon
              iconName="bullseye-arrow"
              backgroundColor="#DDD1FF"
              size={{ faSize: 20, wrapperSize: 48 }}
            />
          </div>
          <div className={style.skillFocusHeaderContent}>
            <div className={style.skillFocusHeaderTitle}>{translate('skills_focus')}</div>
            <div className={style.skillFocusHeaderDescription}>{translate('skills_focus_description')}</div>
          </div>
          <ChangeSkillFocusButton onClick={() => { }} />
        </header>
      </div>
    </div>
  )
};

MyLearning.contextTypes = {
  translate: Provider.childContextTypes.translate
};

MyLearning.propTypes = {
  // skills: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string,
  //     selected: PropTypes.boolean,
  //   })
  // ),
  // isLoading: PropTypes.bool,
  // isError: PropTypes.bool,
  // footerDescription: PropTypes.string,
  // onSkillClick: PropTypes.func,
  // onCancel: PropTypes.func,
  // onConfirm: PropTypes.func,
  // onClose: PropTypes.func
};

export default MyLearning;