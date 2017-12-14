import React from 'react';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import Select from '../../atom/select';
import Loader from '../../atom/loader';
import ProgressionItem from './progression-item';
import EngineStars from './engine-stars';
import style from './style.css';

class Progression extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectTheme = this.handleSelectTheme.bind(this);
  }

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const {onClick} = this.props.recommendation;
    onClick && onClick(e);
  };
  handleSelectTheme = e => {
    const {onChange} = this.props.themeFilter;
    onChange && onChange(e);
  };
  render() {
    const {
      mainTitle,
      mainSubtitle,
      recommendation = {},
      progressions = [],
      total,
      engines = [],
      themeFilter = {},
      loading
    } = this.props;
    const {skin} = this.context;

    const primary = get('common.primary', skin);
    const loader = loading && (
      <div className={style.loader}>
        <Loader />
      </div>
    );
    const allProgressions = progressions.map(progression => (
      <ProgressionItem {...progression} key={progression.ref} />
    ));
    const engineTabs = engines.map(engine => <EngineStars {...engine} key={engine.type} />);
    const coreProgression = <div className={style.core}>{allProgressions}</div>;
    const themeSelect = !isEmpty(themeFilter.options) && (
      <Select
        borderClassName={style.selectBorder}
        className={style.select}
        theme="thematiques"
        options={themeFilter.options}
        onChange={this.handleSelectTheme}
      />
    );
    const recommendationSection = !isEmpty(recommendation) && (
      <div className={style.recommendationWrapper}>
        <p>{recommendation.title}</p>
        <p>
          <span>{recommendation.subtitle}</span>
          <span className={style.course}>{recommendation.courseTitle}</span>
        </p>
        <Button
          type="link"
          onClick={this.handleClick}
          submitValue={recommendation.cta}
          style={{
            backgroundColor: primary
          }}
          className={style.cta}
        />
      </div>
    );
    return (
      <div className={style.default}>
        <div data-name="activity-header">
          <div className={style.mainTitle}>
            <span>{mainTitle}</span> {mainSubtitle}
          </div>
          <div className={style.headerProgression}>
            <div className={style.wrapperCta}>
              {themeSelect}
              {recommendationSection}
            </div>
            <div className={style.myStars}>
              <div className={style.allStars}>{engineTabs}</div>
              <div
                className={style.totalStars}
                style={{
                  backgroundColor: primary
                }}
              >
                <span>{total.label}</span>
                <p>{total.stars}</p>
                <div className={style.iconBubble}>
                  <StarIcon className={style.iconHeader} color={primary} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.wrapperProgression} data-name="activity-list">
          {coreProgression}
          {loader}
        </div>
      </div>
    );
  }
}

Progression.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Progression.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  mainSubtitle: PropTypes.string.isRequired,
  total: PropTypes.shape({
    label: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired
  }).isRequired,
  engines: PropTypes.arrayOf(PropTypes.shape(EngineStars.propTypes)),
  loading: PropTypes.bool.isRequired,
  progressions: PropTypes.arrayOf(
    PropTypes.shape({...ProgressionItem.propTypes, ref: PropTypes.string.isRequired})
  ),
  themeFilter: PropTypes.shape({
    options: Select.propTypes.options.isRequired,
    onChange: Select.propTypes.onChange
  }),
  recommendation: PropTypes.shape({
    cta: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    courseTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

export default Progression;
