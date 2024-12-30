import React, {useCallback} from 'react';
import {convert} from 'css-color-function';
import {get} from 'lodash/fp';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import Provider from '../../atom/provider';
import style from './style.css';

const LearnerSkillCard = (props, context) => {
  const {
    'aria-label': ariaLabel,
    skillTitle,
    skillAriaLabel,
    focus = false,
    metrics,
    review = false,
    onReviewClick,
    onExploreClick
  } = props;
  const {score, content, questionsToReview = 0} = metrics;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  const reviewLocale = translate('Review');
  const exploreLocale = translate('Explore');
  const questionsLocale = translate('questions');
  const skillFocusLocale = translate('skill_focus');

  const buttonReviewProps = {
    customStyle: {
      backgroundColor: '#FFF',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
      padding: '0px'
    },
    disabled: !review,
    onClick: onReviewClick,
    'aria-label': `${skillTitle}, ${reviewLocale}`,
    label: reviewLocale,
    'data-name': 'learner-skill-card-review-button'
  };

  const buttonExploreProps = {
    customStyle: {
      backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
      color: primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    hoverColor: '#FFFFFF',
    hoverBackgroundColor: primarySkinColor,
    onClick: onExploreClick,
    'aria-label': `${skillTitle}, ${exploreLocale}`,
    label: exploreLocale,
    'data-name': 'learner-skill-card-explore-button',
    icon: {
      position: 'left',
      faIcon: {
        name: 'compass',
        backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
        color: primarySkinColor,
        size: 16
      }
    }
  };

  const ProgressBar = useCallback(() => {
    if (!content) return null;

    const progressBarColor = '#3EC483';
    const inlineProgressValueStyle = {
      backgroundColor: progressBarColor,
      width: `${score}%`
    };

    return (
      <div className={style.progressWrapper}>
        <div
          data-name="progress"
          className={style.progress}
          style={inlineProgressValueStyle}
          role="progressbar"
          aria-label={get('progression', ariaLabel)}
        />
      </div>
    );
  }, [score, ariaLabel, content]);

  return (
    <div
      className={style.learnerSkillCardWrapper}
      data-name="learner-skill-card-wrapper"
      aria-label={ariaLabel}
    >
      {questionsToReview ? (
        <div className={style.skillCoursesAndQuestionsWrapper}>
          {questionsToReview ? (
            <div className={style.skillInformation} data-name="skill-questions">
              <span className={style.skillInformationNumber}>{questionsToReview}</span>
              &nbsp;{questionsLocale}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className={style.skillTitleWrapper}>
        <div
          data-name="skill-title"
          className={style.skillTitle}
          aria-label={skillAriaLabel || skillTitle}
        >
          {skillTitle}
        </div>
        {focus ? (
          <div className={style.skillFocusBadge}>
            <Icon
              iconName="bullseye-arrow"
              backgroundColor="#DDD1FF"
              size={{
                faSize: 10,
                wrapperSize: 16
              }}
            />
            {skillFocusLocale}
          </div>
        ) : null}
      </div>
      <div className={style.progressInformations}>
        <ProgressBar />
        {content ? (
          <div className={style.progressInformation} data-name="completed-percentage">
            <span className={style.progressInformationNumber}>{score}%</span>
          </div>
        ) : null}
      </div>
      <div className={style.ctaWrapper} data-name="cta-wrapper">
        <ButtonLink {...buttonReviewProps} />
        <div className={style.buttonWrapper} data-name="button-explore-wrapper">
          <ButtonLink {...buttonExploreProps} />
        </div>
      </div>
    </div>
  );
};

LearnerSkillCard.contextTypes = {
  skin: Provider.childContextTypes.skin,
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
    questionsToReview: PropTypes.number,
    contentCompleted: PropTypes.number
  }),
  review: PropTypes.bool,
  onReviewClick: PropTypes.func,
  onExploreClick: PropTypes.func
};

export default LearnerSkillCard;
