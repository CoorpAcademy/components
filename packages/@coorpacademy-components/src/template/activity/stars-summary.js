import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {get, getOr, isEmpty, map} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowLeft as ArrowLeft,
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyStar as StarIcon
} from '@coorpacademy/nova-icons';
import Provider, {GetSkinFromContext} from '../../atom/provider';
import EngineStars from './engine-stars';
import style from './stars-summary.css';

const EngineTab = ({engine, engineIndex, firstItemIndex}) => {
  const {type} = engine;
  const state = useMemo(
    () => (engineIndex < firstItemIndex ? 'hidden' : 'active'),
    [engineIndex, firstItemIndex]
  );
  const dataName = useMemo(() => `${type}_total_${state}`, [state, type]);

  return (
    <li className={style[state]} key={type} data-name={dataName}>
      <EngineStars
        {...engine}
        className={engineIndex < firstItemIndex ? style.hidden : style.active}
      />
    </li>
  );
};
EngineTab.propTypes = {
  engine: PropTypes.shape(EngineStars.propTypes),
  engineIndex: PropTypes.number,
  firstItemIndex: PropTypes.number
};

const EngineTabs = ({engines, firstItemIndex}) => {
  return useMemo(
    () =>
      map.convert({cap: false})(
        (engine, index) => (
          <EngineTab
            engine={engine}
            key={`engineTab_${index}`}
            firstItemIndex={firstItemIndex}
            engineIndex={index}
          />
        ),
        engines
      ),
    [engines, firstItemIndex]
  );
};

EngineTabs.propTypes = {
  engines: PropTypes.arrayOf(PropTypes.shape(EngineStars.propTypes)),
  firstItemIndex: PropTypes.number
};

const StarsSummary = (props, legacyContext) => {
  const {total, engines} = props;
  const skin = GetSkinFromContext(legacyContext);

  const [firstItemIndex, setFirstItemIndex] = useState(0);
  const [totalItems] = useState(engines.length);

  const dark = getOr('#90A4AE', 'common.dark', skin);
  const primary = get('common.primary', skin);

  const scrollTo = useCallback(page => setFirstItemIndex(page), []);

  const handleOnLeft = useCallback(() => {
    scrollTo(firstItemIndex - 1);
  }, [firstItemIndex, scrollTo]);

  const handleOnRight = useCallback(() => {
    scrollTo(firstItemIndex + 1);
  }, [firstItemIndex, scrollTo]);

  if (isEmpty(engines)) {
    return null;
  }

  const leftArrowView =
    totalItems > 6 && firstItemIndex > 0 ? (
      <div
        className={style.circle}
        onClick={handleOnLeft}
        data-name="left-arrow"
        data-testid="stars-summary-left-arrow"
      >
        <ArrowLeft color={dark} className={style.left} width={10} height={10} />
      </div>
    ) : null;

  const rightArrowView =
    totalItems > 6 && firstItemIndex < totalItems - 6 ? (
      <div
        className={style.circle}
        onClick={handleOnRight}
        data-name="right-arrow"
        data-testid="stars-summary-right-arrow"
      >
        <ArrowRight color={dark} className={style.right} width={10} height={10} />
      </div>
    ) : null;

  return (
    <div data-name="myStars" className={style.myStars}>
      <div
        data-name="myStars-wrapper"
        className={style.myStarsWrapper}
        data-testid={`stars-summary-engine-index-${firstItemIndex}`}
      >
        <ul
          className={style.allStars}
          data-name="engineList"
          data-testid="stars-summary-engine-tabs"
        >
          <EngineTabs engines={engines} firstItemIndex={firstItemIndex} />
        </ul>
        <div
          className={style.footerSummaryStars}
          style={{
            backgroundColor: primary
          }}
        >
          <div className={style.totalStars}>
            <span>{total.label}</span>
            <p data-name="star-counter">{total.stars}</p>
            <div className={style.iconBubble}>
              <StarIcon className={style.iconHeader} color={primary} />
            </div>
          </div>
          <div className={style.navigationLeft}>{leftArrowView}</div>
          <div className={style.navigationRight}>{rightArrowView}</div>
        </div>
      </div>
    </div>
  );
};

StarsSummary.propTypes = {
  total: PropTypes.shape({
    label: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired
  }).isRequired,
  engines: PropTypes.arrayOf(PropTypes.shape(EngineStars.propTypes)).isRequired
};

StarsSummary.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default StarsSummary;
