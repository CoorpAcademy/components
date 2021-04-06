import React from 'react';
import PropTypes from 'prop-types';
import {get, getOr} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowLeft as ArrowLeft,
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyStar as StarIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import EngineStars from './engine-stars';
import style from './stars-summary.css';

// eslint-disable-next-line react/prefer-stateless-function
class StarsSummary extends React.Component {
  static propTypes = {
    total: PropTypes.shape({
      label: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired
    }).isRequired,
    engines: PropTypes.arrayOf(PropTypes.shape(EngineStars.propTypes))
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {total, engines = []} = this.props;
    const {skin} = this.context;
    const dark = getOr('#90A4AE', 'common.dark', skin);
    const primary = get('common.primary', skin);

    const engineTabs = engines.map(engine => <EngineStars {...engine} key={engine.type} />);

    const leftArrowView = (
      <div className={style.circle} onClick={this.handleOnLeft} data-name="card-list-left-arrow">
        <ArrowLeft color={dark} className={style.left} width={10} height={10} />
      </div>
    );
    const rightArrowView = (
      <div className={style.circle} onClick={this.handleOnRight} data-name="card-list-right-arrow">
        <ArrowRight color={dark} className={style.right} width={10} height={10} />
      </div>
    );

    return (
      <div data-name="myStars" className={style.myStars}>
        <div className={style.allStars} data-name="engineList">
          {engineTabs}
        </div>
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
    );
  }
}

export default StarsSummary;
