import React from 'react';
import PropTypes from 'prop-types';
import head from 'lodash/fp/head';
import last from 'lodash/fp/last';
import shallowCompare from '../../../util/shallow-compare';
import Card from '../../card';
import style from './style.css';

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this._cards = [];

    this.state = {
      left: {
        disabled: true,
        hidden: true
      },
      right: {
        disabled: true,
        hidden: true
      }
    };

    this.leftBound = this.leftBound.bind(this);
    this.maxLeftBound = this.maxLeftBound.bind(this);
    this.rightBound = this.rightBound.bind(this);
    this.wrapperWidth = this.wrapperWidth.bind(this);
    this.cardWidth = this.cardWidth.bind(this);
    this.cardsWidth = this.cardsWidth.bind(this);
    this.getPossiblePositions = this.getPossiblePositions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnLeft = this.handleOnLeft.bind(this);
    this.handleOnRight = this.handleOnRight.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.updateArrowsState = this.updateArrowsState.bind(this);
  }

  componentDidMount() {
    this._cardsWrapper.addEventListener('scroll', this.handleScroll);
    this._cardsCount = this.props.cards.length;

    if (window) {
      window.addEventListener('resize', this.updateArrowsState);
    }

    this.updateArrowsState();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateArrowsState();
  }

  componentWillUnmount() {
    this._cardsWrapper.removeEventListener('scroll', this.handleScroll);

    if (window) {
      window.addEventListener('resize', this.updateArrowsState);
    }
  }

  leftBound() {
    return this._cardsWrapper.scrollLeft;
  }

  maxLeftBound() {
    return this.cardsWidth() - this.wrapperWidth();
  }

  rightBound() {
    return this.leftBound() + this.wrapperWidth();
  }

  wrapperWidth() {
    return this._cardsWrapper.offsetWidth;
  }

  cardWidth() {
    return this._cards.length > 0 ? this._cards[0].scrollWidth : 0;
  }

  cardsWidth() {
    return this._cards.map(el => {
      return el.scrollWidth;
    }).reduce((a, b) => a + b, 0);
  }

  getPossiblePositions(filter) {
    return this._cards.map((card, index, arr) => {
      return arr.slice(0, index).reduce((a, b) => {
        return a + b.scrollWidth;
      }, 0);
    }).filter(filter);
  }

  handleScroll(scrollEvent) {
    if (this.props.onScroll) {
      const leftBound = this.leftBound();
      const rightBound = this.rightBound();
      const cardWidth = this.cardWidth();

      const skip = this.getPossiblePositions(el => {
        return (el + cardWidth) < leftBound;
      }).length;
      const limit = this.getPossiblePositions(el => {
        return (el + cardWidth) > leftBound && el < rightBound;
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
      return toPrevious ? el < currentScrollPos : el > (currentScrollPos + this.wrapperWidth());
    });

    if (!toPrevious) {
      possiblePositions.push(this.cardsWidth());
    }

    if (possiblePositions.length === 0) {
      return;
    }

    const actualPosition = toPrevious ? last(possiblePositions) : head(possiblePositions) - this.wrapperWidth();
    this._cardsWrapper.scrollLeft = actualPosition;
    this.updateArrowsState();
  }

  updateArrowsState() {
    const shouldHideArrows = this.cardsWidth() <= this.wrapperWidth();
    const leftArrowDisabled = this.leftBound() <= 0;
    const rightArrowDisabled = this.rightBound() >= this.cardsWidth();

    this.setState({
      left: {
        hidden: shouldHideArrows,
        disabled: leftArrowDisabled
      },
      right: {
        hidden: shouldHideArrows,
        disabled: rightArrowDisabled
      }
    });
  }

  render() {
    const {
      title,
      cards
    } = this.props;

    const cardsView = cards.map((card, key) => {
      return (
        <div className={style.card}
          key={key} // eslint-disable-next-line no-return-assign
          ref={div => this._cards[key] = div} // eslint-disable-line react/jsx-no-bind
        >
          <Card
            {...card}
          />
        </div>
      );
    });

    const leftArrowView = this.state.left.hidden ? null : (
      <div className={this.state.left.disabled ? style.leftDisabled : style.left}
        onClick={this.handleOnLeft}
      />
    );

    const rightArrowView = this.state.right.hidden ? null : (
      <div className={this.state.right.disabled ? style.rightDisabled : style.right}
        onClick={this.handleOnRight}
      />
    );

    return (
      <div
        className={style.wrapper}
        data-name="cards-list"
      >
        <div className={style.list}>
          <div className={style.listWrapper}>
            <div className={style.title}>
              {title}
            </div>
            <div className={style.cards} // eslint-disable-next-line no-return-assign
              ref={div => this._cardsWrapper = div} // eslint-disable-line react/jsx-no-bind
            >
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

CardsList.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  onScroll: PropTypes.func
};

export default CardsList;
