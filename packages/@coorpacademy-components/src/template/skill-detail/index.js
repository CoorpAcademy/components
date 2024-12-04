import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {get, isNil} from 'lodash/fp';
import Provider from '../../atom/provider';
import Select, {SelectOptionPropTypes} from '../../atom/select';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Icon from '../../atom/icon';
import CardsGrid from '../../organism/cards-grid';
import style from './style.css';
import AllCourses from './all-courses';

export const ContinueLearningButton = (props, context) => {
  const {ongoingCoursesAvailable, onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  return (
    <div>
      <ButtonLink
        label={
          ongoingCoursesAvailable ? translate('continue_learning') : translate('start_learning')
        }
        type="primary"
        customStyle={{
          width: 'fit-content',
          borderRadius: '12px',
          backgroundColor: primarySkinColor
        }}
        hoverBackgroundColor={convert(`hsl(from ${primarySkinColor} h s calc(l*(1 - 0.08)))`)}
        hoverColor="#FFFFFF"
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
    skillRef,
    description,
    metrics = {},
    focused,
    availableForReview,
    ongoingCoursesAvailable,
    skillIncludedCourses,
    filters,
    sorting,
    onBackClick,
    onReviewClick,
    onContinueLearningClick
  } = props;
  const {score = 0, questionsToReview} = metrics;
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
      <div className={style.container} data-name={skillRef}>
        {!isNil(onBackClick) ? (
          <ButtonLinkIcon
            faIcon="arrow-left"
            data-name="back-button"
            aria-label="Back"
            onClick={onBackClick}
            className={style.backButton}
            tooltipPlacement="right"
          />
        ) : null}
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
              ongoingCoursesAvailable={ongoingCoursesAvailable}
              onClick={onContinueLearningClick}
            />
          </div>
        </div>
        {questionsToReview > 0 ? (
          <div className={style.skillInformation} data-name="skill-questions">
            <span className={style.skillInformationNumber}>{questionsToReview}</span>
            &nbsp;{translate('skill_chart_side_panel_questions_to_review')}
          </div>
        ) : null}
        <div className={style.progressContainer}>
          <ProgressBar />
          <span className={style.progressInformationNumber}>{score.toFixed(1)}%</span>
        </div>
        <AllCourses content={skillIncludedCourses} filters={filters} sorting={sorting} />
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
  skillRef: PropTypes.string.isRequired,
  description: PropTypes.string,
  metrics: PropTypes.shape({
    score: PropTypes.number,
    questionsToReview: PropTypes.number
  }),
  focused: PropTypes.bool,
  availableForReview: PropTypes.bool,
  ongoingCoursesAvailable: PropTypes.bool,
  skillIncludedCourses: PropTypes.shape(CardsGrid.propTypes),
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
