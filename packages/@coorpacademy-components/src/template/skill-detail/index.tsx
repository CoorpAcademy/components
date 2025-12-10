import React, {useCallback, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isNil} from 'lodash/fp';
import Markdown from 'markdown-to-jsx';
import {convert} from 'css-color-function';
import Provider from '../../atom/provider';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Icon from '../../atom/icon';
import IconPreview from '../../molecule/icon-preview';
import ButtonLink from '../../atom/button-link';
import CardsGrid, {CardsGridProps} from '../../organism/cards-grid';
import {COLORS} from '../../variables/colors';
import {SelectOptionPropTypes} from '../../atom/select';
import AllCourses from './all-courses';
import style from './style.css';

interface ContinueLearningButtonProps {
  ongoingCoursesAvailable?: boolean;
  onClick?: () => void;
}
interface ProviderContext {
  skin: {
    common: {
      primary: string;
      secondary: string;
    };
  };
  translate: (key: string, options?: any) => string;
}

export const ContinueLearningButton = (
  props: ContinueLearningButtonProps,
  context: ProviderContext
) => {
  const {ongoingCoursesAvailable, onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  return (
    <ButtonLink
      label={ongoingCoursesAvailable ? translate('continue_learning') : translate('start_learning')}
      type="primary"
      customStyle={{
        width: 'fit-content',
        borderRadius: '12px',
        backgroundColor: primarySkinColor
      }}
      hoverBackgroundColor={convert(`hsl(from ${primarySkinColor} h s calc(l*(1 - 0.08)))`)}
      hoverColor={COLORS.white}
      icon={{
        position: 'left',
        faIcon: {
          name: 'play',
          color: COLORS.white,
          size: 14
        }
      }}
      onClick={onClick}
    />
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

interface Metrics {
  score?: number;
  questionsToReview?: number;
  totalContents?: number;
}

type BannerMicrolearning =
  | Record<string, never>
  | {
      action: () => void;
      oldSwitchValue: boolean;
    };
interface SkillDetailProps {
  title: string;
  icon: {name: string; color: string};
  skillRef: string;
  description?: string;
  metrics?: Metrics;
  focused?: boolean;
  availableForReview?: boolean;
  ongoingCoursesAvailable?: boolean;
  skillIncludedCourses: CardsGridProps;
  filters: {
    onChange?: () => void;
    options?: unknown[];
  };
  onBackClick?: () => void;
  onReviewClick?: () => void;
  onContinueLearningClick?: () => void;
  search: {
    oldValue: string;
    onChange: () => void;
  };
  bannerMicrolearning?: BannerMicrolearning;
}
const SkillDetail = (props: SkillDetailProps, context: ProviderContext) => {
  const {
    title,
    icon: {color: iconColor, name: iconName},
    skillRef,
    description,
    metrics = {},
    focused,
    availableForReview,
    ongoingCoursesAvailable,
    skillIncludedCourses,
    filters,
    onBackClick,
    onReviewClick,
    onContinueLearningClick,
    search,
    bannerMicrolearning
  } = props;

  const {score = 0, questionsToReview = 0, totalContents = 0} = metrics;
  const {translate} = context;
  const bannerMicrolearningAction = bannerMicrolearning?.action;
  const descriptionRef = useRef(null);
  const [isDescriptionTruncated, setIsDescriptionTruncated] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);

  useEffect(() => {
    if (descriptionRef.current) {
      const {clientHeight = 0, scrollHeight = 0} = descriptionRef.current;
      setIsDescriptionTruncated(scrollHeight > clientHeight);
    }
  }, [description]);

  const Description = useCallback(() => {
    return (
      <div
        ref={descriptionRef}
        data-testid="skill-description"
        className={classnames(style.description, !showMore && style.truncate)}
      >
        {description ? <Markdown>{description}</Markdown> : null}
      </div>
    );
  }, [showMore, description]);

  const ProgressBar = useCallback(() => {
    if (typeof score !== 'number') return null;

    const progressBarColor = COLORS.cm_positive_500;
    const inlineProgressStyle = {
      backgroundColor: progressBarColor,
      width: `${score}%`
    };

    return (
      <div className={style.progressBarRow}>
        <div className={style.progressBarWrapper}>
          <div
            data-name="progress"
            className={style.progress}
            style={inlineProgressStyle}
            role="progressbar"
            aria-valuenow={score}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <span className={style.progressInformationNumber}>{score.toFixed(1)}%</span>
      </div>
    );
  }, [score]);
  const hasDescription = Boolean(description && description.trim().length > 0);

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container} data-name={skillRef}>
        {/* Top section for the back arrow (optional) */}
        <div className={style.topSection}>
          {!isNil(onBackClick) ? (
            <ButtonLinkIcon
              faIcon="arrow-left"
              data-name="back-button"
              aria-label={translate('back')}
              onClick={onBackClick}
              className={style.backButton}
              tooltipPlacement="right"
            />
          ) : null}
        </div>

        {/* Main section: icon on the left, skill info on the right */}
        <div className={style.mainSection}>
          <div className={style.leftSide}>
            <IconPreview
              icon={{
                name: iconName,
                color: iconColor
              }}
              title={title}
              customStyle={{gap: 24, padding: '50px 49px 50px 50px'}}
            />
          </div>
          <div className={style.rightSide}>
            {focused ? (
              <div className={style.skillFocusBadge}>
                <Icon
                  iconName="bullseye-arrow"
                  backgroundColor={COLORS.purple_100}
                  size={{faSize: 10, wrapperSize: 16}}
                />
                {translate('skill_focus')}
              </div>
            ) : (
              <div className={style.skillBadge}>
                <Icon
                  iconName="shapes"
                  backgroundColor={COLORS.cm_grey_100}
                  size={{faSize: 10, wrapperSize: 16}}
                />
                {translate('skill')}
              </div>
            )}

            <h2 className={style.title}>{title}</h2>

            {description && (
              <>
                <Description />
                {isDescriptionTruncated ? (
                  <div className={style.showMoreWrapper} onClick={handleShowMore}>
                    {showMore ? translate('Show less') : translate('Show more')}
                    <Icon
                      iconName={showMore ? 'chevron-up' : 'chevron-down'}
                      size={{faSize: 14, wrapperSize: 14}}
                      customStyle={{padding: '8px'}}
                    />
                  </div>
                ) : null}
              </>
            )}

            {questionsToReview > 0 ? (
              <div className={style.skillInformation}>
                <span
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: translate('skill_chart_side_panel_questions_to_review', {
                      count: questionsToReview
                    })
                  }}
                />
              </div>
            ) : null}

            <div
              className={classnames(
                style.progressContainer,
                !hasDescription && style.noDescriptionSpacing
              )}
            >
              <ProgressBar />
            </div>

            <div className={style.ctaWrapper}>
              <ContinueLearningButton
                ongoingCoursesAvailable={ongoingCoursesAvailable}
                onClick={onContinueLearningClick}
              />
              <ButtonLink
                type="secondary"
                label={translate('review_this_skill')}
                disabled={!availableForReview}
                onClick={onReviewClick}
                icon={{
                  position: 'left',
                  faIcon: {
                    name: 'rotate-right',
                    color: COLORS.cm_grey_700,
                    size: 14
                  }
                }}
                customStyle={{borderRadius: '12px', width: 'fit-content'}}
              />
            </div>
          </div>
        </div>

        {/* Courses section below */}
        <AllCourses
          content={skillIncludedCourses}
          filters={filters}
          totalContents={totalContents}
          bannerMicrolearning={
            bannerMicrolearning && bannerMicrolearningAction
              ? {
                  type: 'skill',
                  action: bannerMicrolearningAction,
                  oldSwitchValue: bannerMicrolearning.oldSwitchValue
                }
              : undefined
          }
          search={search}
        />
      </div>
    </div>
  );
};

SkillDetail.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SkillDetail.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string
  }).isRequired,
  skillRef: PropTypes.string.isRequired,
  description: PropTypes.string,
  metrics: PropTypes.shape({
    score: PropTypes.number,
    questionsToReview: PropTypes.number,
    totalContents: PropTypes.number
  }),
  focused: PropTypes.bool,
  availableForReview: PropTypes.bool,
  ongoingCoursesAvailable: PropTypes.bool,
  skillIncludedCourses: PropTypes.shape(CardsGrid.propTypes),
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  onBackClick: PropTypes.func,
  onReviewClick: PropTypes.func,
  onContinueLearningClick: PropTypes.func,
  search: PropTypes.shape({
    oldValue: PropTypes.string,
    onChange: PropTypes.func
  }),
  bannerMicrolearning: PropTypes.shape({
    action: PropTypes.func,
    oldSwitchValue: PropTypes.bool
  })
};

export default SkillDetail;
