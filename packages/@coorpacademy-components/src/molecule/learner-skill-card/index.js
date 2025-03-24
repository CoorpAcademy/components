import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import Provider from '../../atom/provider';
import ProgressBar from '../progress-bar';
import {COLORS} from '../../variables/colors';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import style from './style.css';

const MAX_SCORE = 100;

const LearnerSkillCard = (props, context) => {
  const {
    // 'aria-label': ariaLabel,
    focus = false,
    metrics,
    skill,
    onExploreClick
  } = props;
  const {score, content, questionsToReview = 0} = metrics;
  const {title, ariaLabel, iconColor, iconName} = skill;
  const {translate} = context;
  const questionsLocale = translate('skill_chart_side_panel_questions_to_review');
  const skillFocusLocale = translate('skill_focus');

  // const {customBackgroundColor} = focus ? '#DDD1FF' : COLORS.gray;
  return (
    <div
      data-name="learner-skill-card-wrapper"
      onClick={onExploreClick}
      className={style.learnerSkillCardContainer}
    >
      {/* icon background */}
      <div
        className={style.iconBackgroundWrapper}
        style={{background: createGradientBackground(iconColor, '93%', '100%')}}
      >
        {/* wrapper with gradient background */}
        <div className={style.iconWrapper} data-testid="icon-wrapper">
          <Icon
            iconName={iconName}
            iconColor={iconColor}
            gradientBackground
            // size={{
            //   faSize: 12,
            //   wrapperSize: 30
            // }}
            preset="m"
          />
        </div>
      </div>
      {/* card content */}
      <div className={style.learnerSkillCardContent}>
        <div className={style.skillTitleWrapper}>
          <div
            className={style.skillFocusBadge}
            style={{
              backgroundColor: focus ? '#DDD1FF' : COLORS.gray,
              color: focus ? '#2B00A3' : COLORS.cm_grey_500
            }}
          >
            <Icon
              iconName={focus ? 'bullseye-arrow' : 'shapes'}
              backgroundColor={focus ? '#DDD1FF' : COLORS.gray}
              size={{
                faSize: 10,
                wrapperSize: 16
              }}
            />
            {focus ? skillFocusLocale : translate('skill')}
          </div>
          <div data-name="skill-title" className={style.skillTitle} aria-label={ariaLabel || title}>
            {title}
          </div>
        </div>
        <div className={style.contentAndQuestionsWrapper}>
          <div>
            {content} {translate('content')}
          </div>
          {questionsToReview ? (
            <div className={style.skillQuestionsWrapper}>
              <div
                className={style.skillInformation}
                data-name="learner-skill-card-skill-questions"
              >
                <span className={style.skillInformationNumber}>{questionsToReview}</span>
                &nbsp;{questionsLocale}
              </div>
            </div>
          ) : null}
        </div>
        <div className={style.progressInformations}>
          <ProgressBar
            value={score}
            displayInfo={false}
            max={MAX_SCORE}
            className={style.progressWrapper}
            style={{backgroundColor: COLORS.positive}}
          />
        </div>
      </div>
    </div>
  );
};

LearnerSkillCard.contextTypes = {
  // skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

LearnerSkillCard.propTypes = {
  // 'aria-label': PropTypes.string,
  // skillTitle: PropTypes.string,
  // skillAriaLabel: PropTypes.string,
  focus: PropTypes.bool,
  metrics: PropTypes.shape({
    score: PropTypes.number,
    content: PropTypes.number,
    questionsToReview: PropTypes.number
  }),
  skill: PropTypes.shape({
    title: PropTypes.string,
    ariaLabel: PropTypes.string,
    iconColor: PropTypes.string,
    iconName: PropTypes.string
  }),
  onExploreClick: PropTypes.func
};

export default LearnerSkillCard;
