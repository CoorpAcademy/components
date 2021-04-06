import React from 'react';
import {NovaCompositionCoorpacademyStar as StarIcon} from '@coorpacademy/nova-icons';
import {get, omit, isEmpty} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import Select from '../../atom/select';
import Loader from '../../atom/loader';
import {innerHTML} from '../../atom/label/style.css';
import ProgressionItem from './progression-item';
import EngineStars from './engine-stars';
import EngineList from './engine-list';
import style from './style.css';

class Progression extends React.Component {
  static propTypes = {
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

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectTheme = this.handleSelectTheme.bind(this);
  }

  handleClick = e => {
    const {recommendation} = this.props;
    e.stopPropagation();
    e.preventDefault();
    const {onClick} = recommendation;
    onClick && onClick(e);
  };

  handleSelectTheme = e => {
    const {
      themeFilter: {onChange}
    } = this.props;
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
    const loader = loading ? (
      <div className={style.loader}>
        <Loader />
      </div>
    ) : null;
    const allProgressions = progressions.map(progression => (
      <ProgressionItem {...omit(['ref'], progression)} key={progression.ref} />
    ));

    const coreProgression = (
      <div data-name="activityCore" className={style.core}>
        {allProgressions}
      </div>
    );
    const themeSelect = !isEmpty(themeFilter.options) ? (
      <Select
        borderClassName={style.selectBorder}
        className={style.select}
        theme="thematiques"
        options={themeFilter.options}
        onChange={this.handleSelectTheme}
      />
    ) : null;
    const recommendationSection = !isEmpty(recommendation) ? (
      <div className={style.recommendationWrapper}>
        <p className={style.recommendationSection}>{recommendation.title} </p>
        <p className={style.recommendationSection}>
          <span>{recommendation.subtitle} </span>
          <span
            className={classnames(style.course, innerHTML)}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: recommendation.courseTitle}}
          />
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
    ) : null;
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
            <div data-name="myStars" className={style.myStars}>
              <EngineList engines={engines} />
              <div
                className={style.totalStars}
                style={{
                  backgroundColor: primary
                }}
              >
                <span>{total.label}</span>
                <p data-name="star-counter">{total.stars}</p>
                <div className={style.iconBubble}>
                  <StarIcon className={style.iconHeader} color={primary} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.wrapperProgression} data-name="activityList">
          {coreProgression}
          {loader}
        </div>
      </div>
    );
  }
}

export default Progression;
