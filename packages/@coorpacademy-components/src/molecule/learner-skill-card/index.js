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
  const defaultSkillLocale = translate('skill');
  const {tagTextColor, tagBackgroundColor} = useMemo(
    () => ({
      tagTextColor: focus ? '#2B00A3' : COLORS.cm_grey_500,
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
    headerBackgroundRef.current.style.backgroundImage = createGradientBackground(
      iconColor,
      '83%',
      '100%'
    );
  }, [iconColor]);
  const handleMouseLeave = useCallback(() => {
    headerBackgroundRef.current.style.backgroundImage = defaultBackground;
  }, [defaultBackground]);
  return (
    <div
      data-name="learner-skill-card-wrapper"
      onClick={onExploreClick}
      className={style.learnerSkillCardWrapper}
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        data-name="learner-skill-card-icon-header-wrapper"
        ref={headerBackgroundRef}
        className={style.iconHeaderWrapper}
        style={{backgroundImage: defaultBackground, color: tagTextColor}}
      >
        <div className={style.iconWrapper} data-testid="learner-skill-card-icon-wrapper">
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
            {focus ? skillFocusLocale : defaultSkillLocale}
          </div>
          <div
            data-name="skill-title"
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
                <Icon
                  iconName={'circle'}
                  iconColor={COLORS.cm_grey_400}
                  size={{faSize: 4}}
                  customStyle={{padding: 0}}
                />
                <span data-name="learner-skill-card-questions-to-review">{questionsToReview}</span>
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
  translate: Provider.childContextTypes.translate
};

LearnerSkillCard.propTypes = {
  'aria-label': PropTypes.string,
  skillTitle: PropTypes.string,
  skillAriaLabel: PropTypes.string,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  focus: PropTypes.bool,
  metrics: PropTypes.shape({
    score: PropTypes.number,
    content: PropTypes.number,
    questionsToReview: PropTypes.number
  }),
  // review: PropTypes.bool,
  onExploreClick: PropTypes.func
};

export default LearnerSkillCard;
