import React, {useCallback, useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import ProgressBar from '../progress-bar';
import {COLORS} from '../../variables/colors';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import FaIcon from '../../atom/icon';
import style from './style.css';

const MAX_SCORE = 100;

export const updateBackgroundImage = (ref, background) => {
  if (ref.current) {
    ref.current.style.backgroundImage = background;
  }
};
const LearnerSkillCard = (props, context) => {
  const {
    'aria-label': ariaLabel,
    cardIndex,
    title,
    label,
    focus,
    metrics,
    progress = 0,
    icon,
    onClick
  } = props;
  const {content, questionsToReview = 0} = metrics;
  const translate = GetTranslateFromContext(context);
  const {color, name} = icon;
  const [badgeIconName, badgeLocale, tagTextColor, tagBackgroundColor] = focus
    ? ['bullseye-arrow', translate('skill_focus'), COLORS.purple_700, COLORS.purple_100]
    : ['shapes', translate('skill'), COLORS.neutral_500, COLORS.cm_grey_100];
  const headerBackgroundRef = useRef(null);
  const defaultBackground = useMemo(() => createGradientBackground(color, '93%', '100%'), [color]);
  const focusBackground = useMemo(() => createGradientBackground(color, '83%', '100%'), [color]);
  const handleMouseEnter = useCallback(() => {
    updateBackgroundImage(headerBackgroundRef, focusBackground);
  }, [focusBackground]);
  const handleMouseLeave = useCallback(() => {
    updateBackgroundImage(headerBackgroundRef, defaultBackground);
  }, [defaultBackground]);
  return (
    <div
      data-testid={`learner-skill-card-wrapper-${cardIndex}`}
      data-name={`skill-card-${label}`}
      onClick={onClick}
      className={style.learnerSkillCardContainer}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        data-testid="learner-skill-card-icon-header-wrapper"
        ref={headerBackgroundRef}
        className={style.iconHeaderWrapper}
        style={{backgroundImage: defaultBackground, color: tagTextColor}}
      >
        <div className={style.iconWrapper} data-testid="learner-skill-card-icon-wrapper">
          <FaIcon
            {...{
              iconName: name,
              iconColor: color,
              size: {
                faSize: 20,
                wrapperSize: 44
              },
              borderRadius: '12px',
              gradientBackground: true,
              customStyle: {border: '4px solid white'}
            }}
          />
        </div>
      </div>
      <div className={style.learnerSkillCardContent}>
        <div className={style.skillTitleWrapper}>
          <div
            className={style.skillFocusBadge}
            style={{
              backgroundColor: tagBackgroundColor,
              color: tagTextColor
            }}
          >
            <FaIcon
              {...{
                iconName: badgeIconName,
                backgroundColor: tagBackgroundColor,
                size: {
                  faSize: 10,
                  wrapperSize: 16
                }
              }}
            />
            <span style={{color: tagTextColor}}>{badgeLocale}</span>
          </div>

          <div className={style.questionWrapper}>
            <div
              data-name="skill-card-title"
              className={style.skillTitle}
              aria-label={ariaLabel || title}
            >
              {title}
            </div>
            <div className={style.contentAndQuestionsWrapper}>
              <div
                data-name="learner-skill-card-skill-content-number"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{__html: translate('content', {count: content})}}
              />
              {questionsToReview ? (
                <div
                  className={style.skillInformation}
                  data-name="learner-skill-card-skill-questions-wrapper"
                >
                  <FaIcon
                    {...{
                      iconName: 'circle',
                      iconColor: COLORS.cm_grey_400,
                      backgroundColor: 'transparent',
                      size: {faSize: 4, wrapperSize: 0}
                    }}
                  />
                  <span
                    data-name="learner-skill-card-questions-to-review"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: translate('skill_chart_side_panel_questions_to_review', {
                        count: questionsToReview
                      })
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={style.progressInformations}>
        <ProgressBar
          value={progress}
          displayInfo={false}
          max={MAX_SCORE}
          className={style.progressWrapper}
          style={{backgroundColor: COLORS.cm_positive_500}}
        />
      </div>
    </div>
  );
};

LearnerSkillCard.contextTypes = {
  translate: Provider.childContextTypes.translate
};

LearnerSkillCard.propTypes = {
  type: PropTypes.oneOf(['skill']).isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  'aria-label': PropTypes.string,
  cardIndex: PropTypes.number,
  focus: PropTypes.bool,
  progress: PropTypes.number,
  metrics: PropTypes.shape({
    content: PropTypes.number,
    questionsToReview: PropTypes.number
  }),
  icon: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string
  }),
  onClick: PropTypes.func
};
export default LearnerSkillCard;
