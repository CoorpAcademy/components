import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import Provider from '../../atom/provider';
import ProgressBar from '../progress-bar';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const MAX_SCORE = 100;

const LearnerSkillCard = (props, context) => {
  const {
    'aria-label': ariaLabel,
    skillTitle,
    skillAriaLabel,
    focus = false,
    metrics,
    onExploreClick
  } = props;
  const {score, content, questionsToReview = 0} = metrics;
  const {translate} = context;
  const questionsLocale = translate('skill_chart_side_panel_questions_to_review');
  const skillFocusLocale = translate('skill_focus');

  // const {customBackgroundColor} = focus ? '#DDD1FF' : COLORS.gray;
  return (
    <div
      className={style.learnerSkillCardWrapper}
      data-name="learner-skill-card-wrapper"
      aria-label={ariaLabel}
      onClick={onExploreClick}
    >
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
        <div
          data-name="skill-title"
          className={style.skillTitle}
          aria-label={skillAriaLabel || skillTitle}
        >
          {skillTitle}
        </div>
      </div>
      <div className={style.contentAndQuestionsWrapper}>
        <div>
          {content} {translate('content')}
        </div>
        {questionsToReview ? (
          <div className={style.skillQuestionsWrapper}>
            <div className={style.skillInformation} data-name="learner-skill-card-skill-questions">
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
  );
};

LearnerSkillCard.contextTypes = {
  // skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

LearnerSkillCard.propTypes = {
  'aria-label': PropTypes.string,
  skillTitle: PropTypes.string,
  skillAriaLabel: PropTypes.string,
  focus: PropTypes.bool,
  metrics: PropTypes.shape({
    score: PropTypes.number,
    content: PropTypes.number,
    questionsToReview: PropTypes.number
  }),
  onExploreClick: PropTypes.func
};

export default LearnerSkillCard;
