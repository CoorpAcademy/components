import React, {useCallback} from 'react';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import noop from 'lodash/fp/noop';
import omit from 'lodash/fp/omit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Provider, {GetSkinFromContext} from '../../atom/provider';
import Button from '../../atom/button';
import Select from '../../atom/select';
import Loader from '../../atom/loader';
import ProgressionItem from './progression-item';
import EngineStars from './engine-stars';
import StarsSummary from './stars-summary';
import style from './style.css';

const mapWithIndex = map.convert({cap: false});

const Progression = (props, legacyContext) => {
  const {
    mainTitle,
    mainSubtitle,
    recommendation = {},
    progressions = [],
    adaptiveAriaLabel,
    total,
    engines = [],
    themeFilter = {},
    loading,
    'aria-label': ariaLabel
  } = props;
  const skin = GetSkinFromContext(legacyContext);
  const {onChange: themeFilterOnChange} = themeFilter;

  const handleClick = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
      const {onClick = noop} = recommendation;
      onClick(e);
    },
    [recommendation]
  );

  const handleSelectTheme = useCallback(
    e => {
      themeFilterOnChange && themeFilterOnChange(e);
    },
    [themeFilterOnChange]
  );

  const primary = get('common.primary', skin);
  const loader = loading ? (
    <div className={style.loader}>
      <Loader />
    </div>
  ) : null;
  const allProgressions = mapWithIndex(
    (progression, index) => (
      <ProgressionItem
        {...omit(['ref'], progression)}
        key={`${index}-${progression.ref}`}
        adaptiveAriaLabel={adaptiveAriaLabel}
      />
    ),
    progressions
  );

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
      onChange={handleSelectTheme}
      aria-label={ariaLabel}
    />
  ) : null;
  const recommendationSection = !isEmpty(recommendation) ? (
    <div className={style.recommendationWrapper}>
      <p className={style.recommendationSection}>{recommendation.title} </p>
      <p className={style.recommendationSection}>
        <span>{recommendation.subtitle} </span>
        <span
          className={classnames(style.course, style.innerHTML)}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: recommendation.courseTitle}}
        />
      </p>
      <Button
        type="link"
        onClick={handleClick}
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
      <div data-name="activity-header" tabIndex={0}>
        <div className={style.mainTitle} tabIndex={0}>
          <span>{mainTitle}</span> {mainSubtitle}
        </div>
        <div className={style.headerProgression} tabIndex={0}>
          <div className={style.wrapperCta} tabIndex={0}>
            {themeSelect}
            {recommendationSection}
          </div>
          <StarsSummary engines={engines} total={total} />
        </div>
      </div>
      <div className={style.wrapperProgression} data-name="activityList">
        {coreProgression}
        {loader}
      </div>
    </div>
  );
};

Progression.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Progression.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  mainSubtitle: PropTypes.string.isRequired,
  adaptiveAriaLabel: PropTypes.string,
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
  }),
  'aria-label': PropTypes.string
};

export default Progression;
