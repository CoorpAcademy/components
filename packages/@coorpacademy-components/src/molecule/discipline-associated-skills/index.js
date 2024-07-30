import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isEmpty, uniqueId} from 'lodash/fp';
import Icon from '../../atom/icon';
import ToolTip from '../../atom/tooltip';
import Provider from '../../atom/provider';
import CatalogSection from '../../atom/catalog-section';
import style from './style.css';

const DisciplineAssociatedSkills = (props, context) => {
  const {translate} = context;

  const {skills = [], onSkillClick} = props;

  const AnchorElement = useCallback(
    skill => (
      <div className={style.chipFocusedContent}>
        {skill.focused ? (
          <Icon
            iconName="bullseye-arrow"
            backgroundColor="#DDD1FF"
            size={{
              faSize: 12,
              wrapperSize: 12
            }}
          />
        ) : null}
        <div className={style.chipFocusedContentText}>{skill.locale}</div>
      </div>
    ),
    []
  );

  const TooltipContentElement = useCallback(
    skill => (
      <div className={style.tooltipContentWrapper}>
        {skill.focused ? (
          <div>
            <b>{translate('skill_focused_chip_tooltip')}</b>
          </div>
        ) : null}
        <div>{skill.locale}</div>
      </div>
    ),
    []
  );

  return !isEmpty(skills) ? (
    <div data-name="discipline-associated-skills" className={style.associatedSkillsWrapper}>
      <CatalogSection title={translate('associated_skills')}>
        <div className={style.chipsWrapper}>
          {skills.map(skill => {
            function handleSkillClick() {
              return onSkillClick(skill.id);
            }
            function handleAnchorElement() {
              return AnchorElement(skill);
            }
            function handleTooltipContentElement() {
              return TooltipContentElement(skill);
            }
            return (
              <div
                key={uniqueId()}
                className={classnames(style.chipWrapper, skill.focused && style.chipWrapperFocused)}
                onClick={handleSkillClick}
              >
                <ToolTip
                  AnchorElement={handleAnchorElement}
                  fontSize={12}
                  delayHide={0}
                  iconContainerClassName={style.infoIconTooltip}
                  tooltipClassName={skill.focused ? style.tooltipSkillFocused : style.tooltip}
                  TooltipContent={handleTooltipContentElement}
                  closeToolTipInformationTextAriaLabel={translate('close_tooltip_information')}
                />
              </div>
            );
          })}
        </div>
      </CatalogSection>
    </div>
  ) : null;
};

DisciplineAssociatedSkills.contextTypes = {
  translate: Provider.childContextTypes.translate
};

DisciplineAssociatedSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      ref: PropTypes.string,
      locale: PropTypes.string,
      focused: PropTypes.bool
    })
  ),
  onSkillClick: PropTypes.func
};

export default DisciplineAssociatedSkills;
