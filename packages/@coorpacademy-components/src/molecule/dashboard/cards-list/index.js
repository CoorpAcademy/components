import React from 'react';
import debounce from 'lodash/fp/debounce';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import head from 'lodash/fp/head';
import isEqual from 'lodash/fp/isEqual';
import last from 'lodash/fp/last';
import PropTypes from 'prop-types';
import ArrowLeft from '@coorpacademy/nova-icons/composition/navigation/arrow-left';
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import Provider from '../../../atom/provider';
import Card from '../../card';
import style from './style.css';

const ShowMoreLink = (props, context) => {
  const {onShowMore, showMore} = props;
  const {skin} = context;
  const darkColor = get('common.dark', skin);

  return (
    <div className={style.showMore} onClick={onShowMore}>
      {showMore}
      <ArrowRight color={darkColor} className={style.showMoreIcon} />
    </div>
  );
};

ShowMoreLink.contextTypes = {
  skin: Provider.childContextTypes.skin
};

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.cards = [];

    this.state = {
      left: {
        hidden: true
      },
      right: {
        hidden: true
      }
    };

    this.leftBound = this.leftBound.bind(this);
    this.maxLeftBound = this.maxLeftBound.bind(this);
    this.rightBound = this.rightBound.bind(this);
    this.wrapperWidth = this.wrapperWidth.bind(this);
    this.cardsWidth = this.cardsWidth.bind(this);
    this.getPossiblePositions = this.getPossiblePositions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnLeft = this.handleOnLeft.bind(this);
    this.handleOnRight = this.handleOnRight.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.updateArrowsState = debounce(200, this.updateArrowsState.bind(this));
    this.setCardsWrapper = this.setCardsWrapper.bind(this);
  }

  componentDidMount() {
    this.cardsWrapper.addEventListener('scroll', this.handleScroll);

    if (window) {
      window.addEventListener('resize', this.updateArrowsState);
    }

    this.updateArrowsState();
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateArrowsState();
  }

  componentWillUnmount() {
    this.cardsWrapper.removeEventListener('scroll', this.handleScroll);

    if (window) {
      window.addEventListener('resize', this.updateArrowsState);
    }
  }

  setCards(key) {
    return el => {
      this.cards[key] = el;
    };
  }

  setCardsWrapper(el) {
    this.cardsWrapper = el;
  }

  leftBound() {
    return getOr(0, 'scrollLeft', this.cardsWrapper);
  }

  maxLeftBound() {
    return this.cardsWidth() - this.wrapperWidth();
  }

  rightBound() {
    return this.leftBound() + this.wrapperWidth();
  }

  wrapperWidth() {
    return getOr(0, 'offsetWidth', this.cardsWrapper);
  }

  cardsWidth() {
    return this.cards.map(getOr(0, 'scrollWidth')).reduce((a, b) => a + b, 0);
  }

  getPossiblePositions(filter) {
    return this.cards
      .map((card, index, arr) => {
        return arr.slice(0, index).reduce((a, b) => {
          return a + getOr(0, 'scrollWidth', b);
        }, 0);
      })
      .filter(filter);
  }

  handleScroll(scrollEvent) {
    if (this.props.onScroll) {
      const leftBound = this.leftBound();
      const rightBound = this.rightBound();

      const skip = this.getPossiblePositions((el, index) => {
        return el + getOr(0, [index, 'scrollWidth'], this.cards) <= leftBound;
      }).length;
      const limit = this.getPossiblePositions((el, index) => {
        return el + getOr(0, [index, 'scrollWidth'], this.cards) > leftBound && el < rightBound;
      }).length;
      this.props.onScroll(skip, limit);
    }
  }

  handleOnLeft() {
    const currentScrollPos = this.leftBound();
    if (currentScrollPos <= 0) {
      return;
    }

    this.scrollTo(currentScrollPos, true);
  }

  handleOnRight() {
    const currentScrollPos = this.leftBound();
    if (currentScrollPos >= this.maxLeftBound()) {
      return;
    }

    this.scrollTo(currentScrollPos, false);
  }

  scrollTo(currentScrollPos, toPrevious) {
    const possiblePositions = this.getPossiblePositions(el => {
      return toPrevious ? el < currentScrollPos : el > currentScrollPos + this.wrapperWidth();
    });

    if (!toPrevious) {
      possiblePositions.push(this.cardsWidth());
    }

    if (possiblePositions.length === 0) {
      return;
    }

    const actualPosition = toPrevious
      ? last(possiblePositions)
      : head(possiblePositions) - this.wrapperWidth();
    this.cardsWrapper.scrollLeft = actualPosition;
    this.updateArrowsState();
  }

  updateArrowsState() {
    const shouldHideArrows = this.cardsWidth() <= this.wrapperWidth();
    const leftArrowDisabled = this.leftBound() <= 0;
    const rightArrowDisabled = this.rightBound() >= this.cardsWidth();

    const nextState = {
      left: {
        hidden: shouldHideArrows || leftArrowDisabled
      },
      right: {
        hidden: shouldHideArrows || rightArrowDisabled
      }
    };

    if (!isEqual(this.state, nextState)) this.setState(nextState);
  }

  render() {
    const {title, showMore, cards, onShowMore} = this.props;
    const {skin} = this.context;

    const mediumColor = getOr('#90A4AE', 'common.medium', skin);

    const cardsView = cards.map((card, key) => {
      return (
        <div className={style.card} key={key} ref={this.setCards(key)}>
          <Card {...card} />
        </div>
      );
    });

    const leftArrowView = this.state.left.hidden
      ? null
      : <ArrowLeft color={mediumColor} className={style.left} onClick={this.handleOnLeft} />;

    const rightArrowView = this.state.right.hidden
      ? null
      : <ArrowRight color={mediumColor} className={style.right} onClick={this.handleOnRight} />;
    const titleView = title && onShowMore
      ? <span className={style.titleLink} onClick={onShowMore}>{title}</span>
      : <span className={style.title}>{title}</span>;
    const showMoreView = showMore && onShowMore
      ? <ShowMoreLink onShowMore={onShowMore} showMore={showMore} />
      : null;
    return (
      <div className={style.wrapper} data-name="cards-list">
        <div className={style.list}>
          <div className={style.listWrapper}>
            <div>
              {titleView}
              {showMoreView}
            </div>
            <div className={style.cards} ref={this.setCardsWrapper}>
              {cardsView}
            </div>
          </div>
          {leftArrowView}
          {rightArrowView}
        </div>
      </div>
    );
  }
}

CardsList.contextTypes = {
  skin: Provider.childContextTypes.skin
};

CardsList.propTypes = {
  title: PropTypes.string,
  showMore: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape(Card.protoTypes)),
  onScroll: PropTypes.func,
  onShowMore: PropTypes.func
};

export default CardsList;
