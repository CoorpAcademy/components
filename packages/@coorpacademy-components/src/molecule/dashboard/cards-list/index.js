import React from 'react';
import PropTypes from 'prop-types';
import head from 'lodash/fp/head';
import tail from 'lodash/fp/tail';
import Card from '../../card';
import style from './style.css';

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this._cards = [];

    this.wrapperWidth = this.wrapperWidth.bind(this);
    this.cardWidth = this.cardWidth.bind(this);
    this.cardsWidth = this.cardsWidth.bind(this);
    this.maxScrollPosition = this.maxScrollPosition.bind(this);
    this.getPossiblePositions = this.getPossiblePositions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnLeft = this.handleOnLeft.bind(this);
    this.handleOnRight = this.handleOnRight.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    this._cardsWrapper.addEventListener('scroll', this.handleScroll);
    this._cardsCount = this.props.cards.length;
  }

  componentWillUnmount() {
    this._cardsWrapper.removeEventListener('scroll', this.handleScroll);
  }

  wrapperWidth() {
    return this._cardsWrapper.offsetWidth;
  }

  cardWidth() {
    return this._cards.length > 0 ? this._cards[0].scrollWidth : 0;
  }

  cardsWidth() {
    return this._cardsCount * this.cardWidth();
  }

  maxScrollPosition() {
    return this.cardsWidth() - this.wrapperWidth();
  }

  getPossiblePositions(filter) {
    const cardWidth = this.cardWidth();
    return this._cards.map((card, index) => {
      return index * cardWidth;
    }).filter(filter);
  }

  handleScroll(scrollEvent) {
    // console.log(scrollEvent.target.scrollLeft);
    // comput how skip and limit and call onScroll
    //this.props.onScroll();
  }

  handleOnLeft() {
    const currentScrollPos = this._cardsWrapper.scrollLeft;
    if (currentScrollPos <= 0) {
      return;
    }

    this.scrollTo(currentScrollPos, true);
  }

  handleOnRight() {
    const currentScrollPos = this._cardsWrapper.scrollLeft + this.wrapperWidth();
    // console.log('Max position:' + this.maxScrollPosition());
    if (currentScrollPos >= this.maxScrollPosition()) {
      return;
    }

    this.scrollTo(currentScrollPos, false);
  }

  scrollTo(currentScrollPos, toPrevious) {
    // console.log('Going to scroll from:' + currentScrollPos);

    const possiblePositions = this.getPossiblePositions(el => {
      return toPrevious ? el < currentScrollPos : el > currentScrollPos;
    });
    const actualPosition = toPrevious ? tail(possiblePositions) : head(possiblePositions) - this.wrapperWidth();
    // console.log('Actual position:' + actualPosition);
    this._cardsWrapper.scrollLeft = actualPosition;
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

    return (
      <div
        className={style.wrapper}
        data-name="cards-list"
      >
        <div className={style.list}>
          <div className={style.title}>
            {title}
          </div>
          <div className={style.cards} // eslint-disable-next-line no-return-assign
            ref={div => this._cardsWrapper = div} // eslint-disable-line react/jsx-no-bind
          >
            {cardsView}
          </div>
          <div className={style.left}
            onClick={this.handleOnLeft}
          />
          <div className={style.right}
            onClick={this.handleOnRight}
          />
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
