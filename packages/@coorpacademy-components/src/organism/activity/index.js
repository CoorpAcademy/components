import React from 'react';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
import TimerIcon from '@coorpacademy/nova-icons/composition/coorpacademy/timer';
import BoltIcon from '@coorpacademy/nova-icons/composition/coorpacademy/bolt';
import ArrowRightIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import GraduationIcon from '@coorpacademy/nova-icons/solid/school-and-science/graduation-hat';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Cta from '../../atom/cta';
import ProgressBar from '../../molecule/progress-bar';
import Link from '../../atom/link';
import Select from '../../atom/select';
import style from './style.css';

class Progression extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {onClick} = this.props;
    onClick && onClick(e);
  }
  render() {
    const {
      title,
      subtitle,
      cta,
      headerRecommandationTitle,
      headerRecommandationSubtitle,
      headerCourseTitle,
      progressions,
      totalStars,
      microlearningStars,
      options,
      onChange,
      microlearningTitle,
      boltStars,
      boltTitle,
      courseStars,
      courseTitle
    } = this.props;
    const {skin} = this.context;
    const headerEmpty = (
      <div className={style.headerEmpty}>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subtitle}</div>
        <Cta submitValue={cta} primary onClick={this.handleClick} className={style.cta} />
      </div>
    );

    const dark = get('common.dark', skin);
    const light = get('common.light', skin);
    const primary = get('common.primary', skin);

    const headerProgression = (
      <div className={style.headerProgression}>
        <div className={style.wrapperCta}>
          <Select theme="invalid" options={options} onChange={onChange} />
          <div>
            <p>{headerRecommandationTitle}</p>
            <span>
              {headerRecommandationSubtitle} <p>{headerCourseTitle}</p>
            </span>
            <Cta submitValue={cta} primary onClick={this.handleClick} className={style.cta} />
          </div>
        </div>
        <div className={style.myStars}>
          <div className={style.allStars}>
            <div className={style.microlearningStars}>
              <span
                className={style.iconMicroLearning}
                style={{
                  backgroundColor: light
                }}
              >
                <GraduationIcon className={style.iconHeader} color={dark} width="30" />
              </span>
              <div className={style.score}>
                {courseStars} <StarIcon className={style.iconStar} color={dark} />
              </div>
              <div className={style.scoreTitle}>{courseTitle}</div>
            </div>

            <div className={style.microlearningStars}>
              <span
                className={style.iconMicroLearning}
                style={{
                  backgroundColor: light
                }}
              >
                <TimerIcon className={style.iconHeader} color={dark} width="30" />
              </span>
              <div className={style.score}>
                {microlearningStars} <StarIcon className={style.iconStar} color={dark} />
              </div>
              <div className={style.scoreTitle}>{microlearningTitle}</div>
            </div>

            <div className={style.microlearningStars}>
              <span
                className={style.iconMicroLearning}
                style={{
                  backgroundColor: light
                }}
              >
                <BoltIcon className={style.iconHeader} color={dark} width="30" />
              </span>
              <div className={style.score}>
                {boltStars} <StarIcon className={style.iconStar} color={dark} />
              </div>
              <div className={style.scoreTitle}>{boltTitle}</div>
            </div>
          </div>

          <div
            className={style.totalStars}
            style={{
              backgroundColor: primary
            }}
          >
            <span>Total:</span>
            <p>{totalStars}</p>
            <div className={style.iconBubble}>
              <StarIcon className={style.iconHeaderMicrolearning} color={primary} />
            </div>
          </div>
        </div>
      </div>
    );

    const allProgressions = progressions.map((progression, index) => {
      const learningIcon =
        progression.type === 'course' ? (
          <GraduationIcon className={style.iconType} color={dark} />
        ) : (
          <TimerIcon className={style.iconType} color={dark} />
        );
      if (progression.completion > 0) {
        return (
          <div key={index}>
            <div className={style.wrapperTitle}>
              {learningIcon}
              <div className={style.label}>{progression.label}</div>
              <div
                className={style.stars}
                style={{
                  color: primary
                }}
              >
                {progression.stars} <StarIcon className={style.iconStar} color={primary} />
              </div>
            </div>
            <ProgressBar
              className={style.completion}
              value={progression.completion}
              max="100"
              style={{
                backgroundColor: primary
              }}
            />
            <div className={style.state}>
              <Link
                style={{
                  color: primary
                }}
              >
                {progression.state} <ArrowRightIcon color={primary} />
              </Link>
              <span className={style.level}>{progression.level}</span>
            </div>
            <div className={style.separation} />
          </div>
        );
      } else return null;
    });

    const pendingProgression = <div className={style.core}>{allProgressions}</div>;

    const header = !progressions ? headerEmpty : headerProgression;
    const coreProgression = progressions ? pendingProgression : null;

    return (
      <div className={style.default}>
        {header}
        <div className={style.wrapperProgression}>{coreProgression}</div>
      </div>
    );
  }
}

Progression.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Progression.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
  headerRecommandationTitle: PropTypes.string,
  headerRecommandationSubtitle: PropTypes.string,
  headerCourseTitle: PropTypes.string,
  onClick: PropTypes.func,
  totalStars: PropTypes.number,
  microlearningStars: PropTypes.number,
  microlearningTitle: PropTypes.string,
  boltTitle: PropTypes.string,
  boltStars: PropTypes.string,
  courseTitle: PropTypes.string,
  courseStars: PropTypes.string,
  progressions: PropTypes.arrayOf({
    completion: PropTypes.string,
    stars: PropTypes.number,
    label: PropTypes.string,
    level: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string
  }),

  options: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.string,
    selected: PropTypes.bool
  }),
  onChange: Select.propTypes.onChange
};

export default Progression;
