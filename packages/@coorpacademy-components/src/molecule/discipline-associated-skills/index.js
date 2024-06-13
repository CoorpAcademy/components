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
        <Icon
          iconName="bullseye-arrow"
          backgroundColor="#DDD1FF"
          size={{
            faSize: 12,
            wrapperSize: 12
          }}
        />
        {skill}
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
              return onSkillClick(skill.ref);
            }
            function handleAnchorElement() {
              return AnchorElement(skill.locale);
            }
            return (
              <div
                key={uniqueId()}
                className={classnames(style.chipWrapper, skill.focused && style.chipWrapperFocused)}
                onClick={handleSkillClick}
              >
                {skill.focused ? (
                  <ToolTip
                    AnchorElement={handleAnchorElement}
                    fontSize={12}
                    iconContainerClassName={style.infoIconTooltip}
                    tooltipClassName={style.tooltip}
                    TooltipContent={translate('skill_focused_chip_tooltip')}
                    closeToolTipInformationTextAriaLabel={translate(
                      'Press the escape key to close the information text'
                    )}
                  />
                ) : (
                  skill.locale
                )}
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
      ref: PropTypes.string,
      locale: PropTypes.string,
      focused: PropTypes.bool
    })
  ),
  onSkillClick: PropTypes.func
};

export default DisciplineAssociatedSkills;
