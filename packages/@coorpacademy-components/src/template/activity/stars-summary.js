import React from 'react';
import PropTypes from 'prop-types';
import {get, getOr, ceil} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowLeft as ArrowLeft,
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyStar as StarIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import EngineStars from './engine-stars';
import style from './stars-summary.css';

const nextPage = (page, totalItems) => {
  if (page < 0) return totalItems;
  if (page > totalItems) return 0;
  return page;
};

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

    const {engines = []} = props;
    this.state = {
      firstItem: 0,
      totalItems: engines.length
    };

    this.handleOnLeft = this.handleOnLeft.bind(this);
    this.handleOnRight = this.handleOnRight.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  handleOnLeft() {
    const {firstItem, totalItems} = this.state;
    this.scrollTo(nextPage(firstItem - 1, totalItems));
  }

  handleOnRight() {
    const {firstItem, totalItems} = this.state;
    this.scrollTo(nextPage(firstItem + 1, totalItems));
  }

  scrollTo(page) {
    this.setState({
      firstItem: page
    });
  }

  render() {
    const {total, engines = []} = this.props;
    const {skin} = this.context;
    const {firstItem, totalItems} = this.state;
    const dark = getOr('#90A4AE', 'common.dark', skin);
    const primary = get('common.primary', skin);

    const engineTabs = engines.map((engine, index) => {
      return (
        <div className={index < firstItem ? style.hide : style.show} key={engine.type}>
          <EngineStars {...engine} className={index < firstItem ? style.hide : style.show} />
        </div>
      );
    });

    const leftArrowView =
      totalItems > 6 && firstItem > 0 ? (
        <div className={style.circle} onClick={this.handleOnLeft} data-name="left-arrow">
          <ArrowLeft color={dark} className={style.left} width={10} height={10} />
        </div>
      ) : null;

    const rightArrowView =
      totalItems > 6 && firstItem < totalItems - 6 ? (
        <div className={style.circle} onClick={this.handleOnRight} data-name="right-arrow">
          <ArrowRight color={dark} className={style.right} width={10} height={10} />
        </div>
      ) : null;

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
