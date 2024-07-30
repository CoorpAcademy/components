import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {get} from 'lodash/fp';
import Provider from '../../atom/provider';
import Select, {SelectOptionPropTypes} from '../../atom/select';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import CardsGrid from '../../organism/cards-grid';
import style from './style.css';
import AllCourses from './all-courses';
import ContinueLearning from './continue-learning';

const ContinueLearningButton = (props, context) => {
  const [hovered, setHovered] = useState(false);
  const {ongoingCoursesAvailable, onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  return (
    <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <ButtonLink
        label={
          ongoingCoursesAvailable ? translate('continue_learning') : translate('start_learning')
        }
        type="primary"
        customStyle={{
          width: 'fit-content',
          borderRadius: '12px',
          backgroundColor: hovered
            ? convert(`hsl(from ${primarySkinColor} h s calc(l*(1 - 0.08)))`)
            : primarySkinColor
        }}
        icon={{
          position: 'left',
          faIcon: {
            name: 'play',
            color: '#FFFFFF',
            size: 16
          }
        }}
        onClick={onClick}
      />
    </div>
  );
};

ContinueLearningButton.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ContinueLearningButton.propTypes = {
  ongoingCoursesAvailable: PropTypes.bool,
  onClick: PropTypes.func
};

const SkillDetail = (props, context) => {
  const {
    title,
    ref,
    description,
    metrics = {},
    focused,
    availableForReview,
    ongoingCourses,
    skillIncludedCourses,
    totalCourses,
    filters,
    sorting,
    onBackClick,
    onReviewClick,
    onContinueLearningClick
  } = props;
  const {score, content, questionsToReview, contentCompleted = 0} = metrics;
  const {translate} = context;

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = useCallback(() => setShowMore(!showMore), [setShowMore, showMore]);

  const Description = useCallback(() => {
    return (
      <div className={classnames(style.description, !showMore && style.truncate)}>
        {description}
      </div>
    );
  }, [showMore, description]);

  const ProgressBar = useCallback(() => {
    if (score === undefined) return null;
    const progressBarColor = '#3EC483';
    const inlineProgressValueStyle = {
      backgroundColor: progressBarColor,
      width: `${score}%`
    };

    return (
      <div className={style.progressBarWrapper}>
        <div
          data-name="progress"
          className={style.progress}
          style={inlineProgressValueStyle}
          role="progressbar"
        />
      </div>
    );
  }, [score]);

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container} data-name={ref}>
        <div className={style.backButtonWrapper} onClick={onBackClick}>
          <Icon
            iconName="arrow-left"
            size={{
              faSize: 14,
              wrapperSize: 14
            }}
          />
        </div>
        <div className={style.ctaContainer}>
          <div>
            {focused ? (
              <div className={style.skillFocusBadge}>
                <Icon
                  iconName="bullseye-arrow"
                  backgroundColor="#DDD1FF"
                  size={{
                    faSize: 10,
                    wrapperSize: 16
                  }}
                />
                {translate('skill_focus')}
              </div>
            ) : null}
            <div className={style.title}>{title}</div>
            {description ? (
              <>
                <Description />
                {description.length >= 226 ? (
                  <div className={style.showMoreWrapper} onClick={handleShowMore}>
                    {showMore ? translate('Show less') : translate('Show more')}
                    <Icon
                      iconName={showMore ? 'chevron-up' : 'chevron-down'}
                      size={{
                        faSize: 14,
                        wrapperSize: 16
                      }}
                    />
                  </div>
                ) : null}
              </>
            ) : null}
          </div>

          <div className={style.ctaWrapper}>
            <ButtonLink
              type="secondary"
              onClick={onReviewClick}
              label={translate('review_this_skill')}
              disabled={!availableForReview}
              customStyle={{
                width: 'fit-content',
                borderRadius: '12px'
              }}
            />
            <ContinueLearningButton
              ongoingCoursesAvailable={!!ongoingCourses.list.length}
              onClick={onContinueLearningClick}
            />
          </div>
        </div>
        {score !== undefined ? (
          <div className={style.progressInformationsWrapper}>
            <div className={style.progressTitle}>{translate('your_progress')}</div>
            <div className={style.skillCoursesAndQuestionsWrapper}>
              {content ? (
                <div className={style.skillInformation} data-name="skill-courses">
                  <span className={style.skillInformationNumber}>{content}</span>{' '}
                  {translate('courses')}
                </div>
              ) : null}
              {questionsToReview ? (
                <div className={style.skillInformation} data-name="skill-questions">
                  <span className={style.skillInformationNumber}>{questionsToReview}</span>
                  &nbsp;{translate('questions')}
                </div>
              ) : null}
            </div>
            <ProgressBar />
            <div className={style.progressInformations}>
              {content && (
                <>
                  <div className={style.progressInformation} data-name="skill-completed-courses">
                    <span className={style.progressInformationNumber}>{contentCompleted}</span>
                    {` ${translate('courses_completed')}`}
                  </div>
                  <div className={style.progressInformation} data-name="completed-percentage">
                    <span className={style.progressInformationNumber}>{score}%</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}
        <ContinueLearning ongoingCourses={ongoingCourses} />
        <AllCourses
          skillIncludedCourses={skillIncludedCourses}
          totalCourses={totalCourses}
          filters={filters}
          sorting={sorting}
        />
      </div>
    </div>
  );
};

SkillDetail.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

SkillDetail.propTypes = {
  title: PropTypes.string.isRequired,
  ref: PropTypes.string.isRequired,
  description: PropTypes.string,
  metrics: PropTypes.shape({
    score: PropTypes.number,
    content: PropTypes.number,
    questionsToReview: PropTypes.number,
    contentCompleted: PropTypes.number
  }),
  focused: PropTypes.bool,
  availableForReview: PropTypes.bool,
  ongoingCourses: PropTypes.shape(CardsGrid.propTypes),
  skillIncludedCourses: PropTypes.shape(CardsGrid.propTypes),
  totalCourses: PropTypes.number,
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  sorting: PropTypes.shape(Select.propTypes),
  onBackClick: PropTypes.func,
  onReviewClick: PropTypes.func,
  onContinueLearningClick: PropTypes.func
};

export default SkillDetail;
