import React, {useCallback, useMemo, useRef} from 'react';
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
    'aria-label': ariaLabel,
    skillTitle,
    skillAriaLabel,
    focus = false,
    metrics,
    iconName,
    iconColor,
    onExploreClick
  } = props;
  const {score, content, questionsToReview = 0} = metrics;
  const {translate} = context;
  const questionsLocale = translate('skill_chart_side_panel_questions_to_review');
  const skillFocusLocale = translate('skill_focus');
  const {tagTextColor, tagBackgroundColor} = useMemo(
    () => ({
      tagTextColor1: focus ? '#2B00A3' : COLORS.cm_grey_500,
      tagBackgroundColor: focus ? '#DDD1FF' : COLORS.gray
    }),
    [focus]
  );
  const headerBackgroundRef = useRef(null);
  const defaultBackground = useMemo(
    () => createGradientBackground(iconColor, '93%', '100%'),
    [iconColor]
  );
  const handleMouseEnter = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('handleMouseEnter');
    headerBackgroundRef.current.style.background = createGradientBackground(
      iconColor,
      '83%',
      '100%'
    );
    headerBackgroundRef.current.style.border = 'none';
  }, [iconColor]);
  const handleMouseLeave = useCallback(() => {
    headerBackgroundRef.current.style.background = defaultBackground;
  }, [defaultBackground]);
  return (
    <div
      data-name="learner-skill-card-wrapper"
      onClick={onExploreClick}
      className={style.learnerSkillCardContainer}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* icon background */}
      <div
        data-name="icon-background"
        ref={headerBackgroundRef}
        className={style.iconBackgroundWrapper}
        style={{background: defaultBackground, color: tagTextColor}}
      >
        {/* wrapper with gradient background */}
        <div className={style.iconWrapper} data-testid="icon-wrapper">
          <Icon
            iconName={iconName}
            iconColor={iconColor}
            gradientBackground
            size={{
              faSize: 20,
              wrapperSize: 44
            }}
            customStyle={{border: '4px solid white'}}
          />
        </div>
      </div>
      {/* card content */}
      <div className={style.learnerSkillCardContent}>
        <div className={style.skillTitleWrapper}>
          <div
            className={style.skillFocusBadge}
            style={{
              backgroundColor: tagBackgroundColor,
              color: tagTextColor
            }}
          >
            <Icon
              iconName={focus ? 'bullseye-arrow' : 'shapes'}
              backgroundColor={tagBackgroundColor}
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
          <div className={style.contentAndQuestionsWrapper}>
            <div data-name="learner-skill-card-skill-content">
              {content} {translate('content')}
            </div>
            {questionsToReview ? (
              <div
                className={style.skillInformation}
                data-name="learner-skill-card-skill-questions"
              >
                <div>
                  <Icon
                    iconName={'circle'}
                    iconColor={COLORS.cm_grey_400}
                    size={{faSize: 4}}
                    customStyle={{padding: 0}}
                  />
                </div>
                <span data-name="questions-to-review">{questionsToReview}</span>
                &nbsp;{questionsLocale}
              </div>
            ) : null}
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
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  onExploreClick: PropTypes.func
};

export default LearnerSkillCard;
