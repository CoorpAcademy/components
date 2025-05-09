import React, {useCallback, useMemo, useRef} from 'react';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import ProgressBar from '../progress-bar';
import {COLORS} from '../../variables/colors';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import FaIcon from '../../atom/icon';
import propTypes, {LearnerSkillCardProps} from './prop-types';
import style from './style.css';

const MAX_SCORE = 100;

export const updateBackgroundImage = (ref: React.RefObject<HTMLDivElement>, background: string) => {
  if (ref.current) {
    ref.current.style.backgroundImage = background;
  }
};

const LearnerSkillCard = (props: LearnerSkillCardProps, context: WebContextValues) => {
  const {
    'aria-label': ariaLabel,
    cardIndex,
    skillTitle,
    skillAriaLabel,
    focus,
    metrics,
    icon,
    onExploreClick
  } = props;
  const {score, content, questionsToReview = 0} = metrics;
  const translate = GetTranslateFromContext(context);
  const {color, name} = icon;
  const questionsLocale = translate('skill_chart_side_panel_questions_to_review') as string;
  const [badgeIconName, badgeLocale, tagTextColor, tagBackgroundColor] = focus
    ? ['bullseye-arrow', translate('skill_focus') as string, COLORS.purple_700, COLORS.purple_100]
    : ['shapes', translate('skill') as string, COLORS.cm_grey_500, COLORS.gray];
  const headerBackgroundRef = useRef<HTMLDivElement | null>(null);
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
      onClick={onExploreClick}
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
            {badgeLocale}
          </div>

          <div className={style.questionWrapper}>
            <div
              data-name="skill-card-title"
              className={style.skillTitle}
              aria-label={skillAriaLabel || skillTitle}
            >
              {skillTitle}
            </div>
            <div className={style.contentAndQuestionsWrapper}>
              <div data-name="learner-skill-card-skill-content-number">
                {content} {translate('content')}
              </div>
              {questionsToReview ? (
                <div
                  className={style.skillInformation}
                  data-name="learner-skill-card-skill-questions-wrapper"
                >
                  <FaIcon
                    {...{
                      iconName: 'circle',
                      iconColor: COLORS.cm_grey_400,
                      size: {faSize: 4},
                      customStyle: {padding: 0, height: 'auto'}
                    }}
                  />
                  <span data-name="learner-skill-card-questions-to-review">
                    {questionsToReview}
                  </span>
                  &nbsp;{questionsLocale}
                </div>
              ) : null}
            </div>
          </div>
        </div>
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
  translate: Provider.childContextTypes.translate
};

LearnerSkillCard.propTypes = propTypes;

export default LearnerSkillCard;
