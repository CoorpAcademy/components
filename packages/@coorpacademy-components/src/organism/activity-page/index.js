import React from 'react';
import map from 'lodash/fp/map';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import head from 'lodash/fp/head';
import filter from 'lodash/fp/filter';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Cta from '../../atom/cta';
import ProgressBar from '../../molecule/progress-bar';
import Select from '../../atom/select';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
import TimerIcon from '@coorpacademy/nova-icons/composition/coorpacademy/timer';
import BoltIcon from '@coorpacademy/nova-icons/composition/coorpacademy/bolt';
import style from './style.css';

class Progression extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {text, onClick} = this.props;
    onClick && onClick(e);
    const isLoading = isEmpty(text);
    return this.setState(() => {
      return {
        isLoading
      };
    });
  }
  render() {
    const {
      title,
      subtitle,
      cta,
      progressions,
      totalStars,
      microlearningStars,
      label,
      options,
      onChange,
      type,
      microlearningTitle,
      submitValue,
      boltStars,
      boltTitle,
      courseStars,
      courseTitle
    } = this.props;
    const {skin} = this.context;
    const currentSelection = pipe(filter('selected'), head)(options);
    const defaultTheme = currentSelection.validOption === false ? 'invalid' : 'question';
    const theme = getOr(defaultTheme, 'theme', this.props);
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
    const xtraLightGrey = get('common.xtraLightGrey', skin);
    const positive = get('common.positive', skin);

    const headerProgression = (
      <div className={style.headerProgression}>   
        
        <div className={style.wrapperCta}>
          <Select theme='invalid' options={options} onChange={onChange} />
            <div>
              <p>Start learning to discover your activity</p>
              <span>
                We recommend<p>BigData</p>
              </span>
              <Cta submitValue={cta} primary onClick={this.handleClick} className={style.cta} />
            </div>
        </div>
        <div className={style.myStars}>
            <div className={style.allStars}>
                <div className={style.microlearningStars}>
                  <span className={style.iconMicroLearning}
                    style={{
                      backgroundColor: light
                    }}
                  >
                    <TimerIcon className={style.iconType} color={dark} width='30'/>
                  </span>
                  <div className={style.score}>{courseStars} <StarIcon className={style.iconStar} color={dark} /></div>
                  <div className={style.scoreTitle}>{courseTitle}</div>
                </div>

                <div className={style.microlearningStars}>
                  <span className={style.iconMicroLearning}
                    style={{
                      backgroundColor: light
                    }}
                  >
                    <TimerIcon className={style.iconType} color={dark} width='30'/>
                  </span>
                  <div className={style.score}>{microlearningStars} <StarIcon className={style.iconStar} color={dark} /></div>
                  <div className={style.scoreTitle}>{microlearningTitle}</div>
                </div>

                <div className={style.microlearningStars}>
                  <span className={style.iconMicroLearning}
                    style={{
                      backgroundColor: light
                    }}
                  >
                    <BoltIcon className={style.iconType} color={dark} width='30'/>
                  </span>
                  <div className={style.score}>{boltStars} <StarIcon className={style.iconStar} color={dark} /></div>
                  <div className={style.scoreTitle}>{boltTitle}</div>
                </div>
            </div>

            <div className={style.totalStars}
              style={{
                backgroundColor: primary
              }}
            >
              <div className={style.iconBubble}>
                <StarIcon className={style.iconHeaderMicrolearning} color={primary} />
              </div>
              <p>{totalStars}</p>
              <span>Stars</span>
            </div>
        </div>
      </div>
    );

    const allProgressions = progressions.map((progression, index) => {
      const learningIcon = (progression.type == 'course') ? <StarIcon className={style.iconType} color={primary} /> : <TimerIcon className={style.iconType} color={primary} /> ;
      if (progression.completion > 0) {
        return(
            <div key={index}>
              <div className={style.wrapperTitle}>
                {learningIcon}
                <div className={style.label}>{progression.label}</div>
                <div className={style.stars} 
                  style={{
                    color: primary
                  }}
                >{progression.stars} <StarIcon className={style.iconStar} color={primary} /></div>
              </div>  
              <ProgressBar className={style.completion} value={progression.completion} max='100'/>
              <div className={style.state}>
                <p>{progression.state} </p>
                <span className={style.level}>{progression.level}</span>
              </div>
              <div className={style.separation} />
            </div>
          );
      }  
      else return null;
    });

    const pendingProgression = (
        <div className={style.core}>
          {allProgressions}
        </div>
    );

    const header = !progressions ? headerEmpty : headerProgression;
    const coreProgression = progressions ? pendingProgression : null;

    return (
        <div className={style.default}>
          {header}
          <div className={style.wrapperProgression}>{coreProgression}</div>
        </div>
      );
  }
};

Progression.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Progression.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
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
