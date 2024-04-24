import React, {useCallback, useState} from 'react';
import {convert} from 'css-color-function';
import {get, getOr} from 'lodash/fp';
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
    metrics,
    onReviewClick,
    onExploreClick
  } = props;
  const {skillCourses, skillQuestions, completedCourses = 0} = metrics;
  const {skin, translate} = context;
  const [hovered, setHovered] = useState(false);
  const primarySkinColor = getOr('#0061FF', 'common.primary', skin);

  const reviewLocale = translate('Review');
  const exploreLocale = translate('Explore');
  const coursesLocale = translate('courses');
  const questionsLocale = translate('questions');
  const skillFocusLocale = translate('skill_focus');
  const coursesCompletedLocale = translate('courses_completed');

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const buttonReviewProps = {
    customStyle: {
      backgroundColor: '#FFF',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onReviewClick,
    'aria-label': `${skillTitle}, ${reviewLocale}`,
    label: reviewLocale,
    'data-name': 'learner-skill-card-review-button'
  };

  const buttonExploreProps = {
    customStyle: {
      backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
      color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onExploreClick,
    'aria-label': `${skillTitle}, ${exploreLocale}`,
    label: exploreLocale,
    'data-name': 'learner-skill-card-explore-button',
    icon: {
      position: 'left',
      faIcon: {
        name: 'compass',
        backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
        color: hovered ? '#FFFFFF' : primarySkinColor,
        size: 16
      }
    }
  };

  const completedPercentage =
    skillCourses && Number.parseInt((completedCourses / skillCourses) * 100);

  const ProgressBar = useCallback(() => {
    if (!skillCourses) return null;

    const progressBarColor = '#3EC483';
    const inlineProgressValueStyle = {
      backgroundColor: progressBarColor,
      width: `${completedPercentage}%`
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
  }, [completedPercentage, ariaLabel, skillCourses]);

  return (
    <div
      className={style.learnerSkillCardWrapper}
      data-name="learner-skill-card-wrapper"
      aria-label={ariaLabel}
    >
      {skillCourses || skillQuestions ? (
        <div className={style.skillCoursesAndQuestionsWrapper}>
          {skillCourses ? (
            <div className={style.skillInformation} data-name="skill-courses">
              <span className={style.skillInformationNumber}>{skillCourses}</span> {coursesLocale}
            </div>
          ) : null}
          {skillQuestions ? (
            <div className={style.skillInformation} data-name="skill-questions">
              <span className={style.skillInformationNumber}>{skillQuestions}</span>
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
      </div>
      <ProgressBar />
      <div className={style.progressInformations}>
        {skillCourses && (
          <>
            <div className={style.progressInformation} data-name="skill-completed-courses">
              <span className={style.progressInformationNumber}>{completedCourses}</span>
              {coursesCompletedLocale}
            </div>
            <div className={style.progressInformation} data-name="completed-percentage">
              <span className={style.progressInformationNumber}>{completedPercentage}%</span>
            </div>
          </>
        )}
      </div>
      <div className={style.ctaWrapper} data-name="cta-wrapper">
        <ButtonLink {...buttonReviewProps} />
        <div
          className={style.buttonWrapper}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          data-name="button-explore-wrapper"
        >
          <ButtonLink {...buttonExploreProps} />
        </div>
      </div>
    </div>
  );
};

LearnerSkillCard.contextTypes = {
  translate: Provider.childContextTypes.translate
};

LearnerSkillCard.propTypes = {
  'aria-label': PropTypes.string,
  skillTitle: PropTypes.string,
  skillAriaLabel: PropTypes.string,
  metrics: PropTypes.shape({
    skillCourses: PropTypes.number,
    skillQuestions: PropTypes.number,
    completedCourses: PropTypes.number
  }),
  onReviewClick: PropTypes.func,
  onExploreClick: PropTypes.func
};

export default LearnerSkillCard;
