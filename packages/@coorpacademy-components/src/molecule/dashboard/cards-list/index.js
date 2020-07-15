import React from 'react';
import {debounce, get, getOr, map, sumBy, last, isEqual} from 'lodash/fp';
import PropTypes from 'prop-types';
import {
  NovaCompositionNavigationArrowLeft as ArrowLeft,
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaSolidContentContentBook1 as LearnerIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Card from '../../card';
import style from './style.css';

const ShowMoreLink = props => {
  const {onShowMore, showMore} = props;
  return (
    <div className={style.showMore} onClick={onShowMore}>
      {showMore}
    </div>
  );
};

ShowMoreLink.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ShowMoreLink.propTypes = {
  onShowMore: PropTypes.func,
  showMore: PropTypes.string
};

const IconView = (props, context) => {
  const {skin} = context;
  const {contentType} = props;
  const ICONS = {
    chapter: TimerIcon,
    course: LearnerIcon
  };

  if (!contentType) {
    return null;
  }

  const dark = get('common.dark', skin);
  const IconType = ICONS[contentType];

  return (
    <div>
      <IconType color={dark} className={style.icon} data-contenttype={contentType} />
    </div>
  );
};

IconView.contextTypes = {
  skin: Provider.childContextTypes.skin
};

IconView.propTypes = {
  contentType: PropTypes.string
};

class CardsList extends React.Component {
  static propTypes = {
    contentType: PropTypes.string,
    dataName: PropTypes.string,
    title: PropTypes.string,
    showMore: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(Card.protoTypes)),
    onScroll: PropTypes.func,
    onShowMore: PropTypes.func
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin,
    translate: Provider.childContextTypes.translate
  };

  constructor(props) {
    super(props);
    this.cards = [];

    this.state = {};

    this.leftBound = this.leftBound.bind(this);
    this.rightBound = this.rightBound.bind(this);
    this.wrapperWidth = this.wrapperWidth.bind(this);
    this.getPossiblePositions = this.getPossiblePositions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnLeft = this.handleOnLeft.bind(this);
    this.handleOnRight = this.handleOnRight.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.updateState = debounce(200, this.updatePages.bind(this));
    this.updatePages = this.updatePages.bind(this);
    this.setCardsWrapper = this.setCardsWrapper.bind(this);
    this.maxPages = this.maxPages.bind(this);
    this.getScrollWidth = this.getScrollWidth.bind(this);
  }

  componentDidMount() {
    this.cardsWrapper.addEventListener('scroll', this.handleScroll);

    if (window) {
      window.addEventListener('resize', this.updateState);
    }

    this.updateState();
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateState();
  }

  componentWillUnmount() {
    this.cardsWrapper.removeEventListener('scroll', this.handleScroll);

    if (window) {
      window.removeEventListener('resize', this.updateState);
    }
    this.updateState.cancel();
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

  rightBound() {
    return this.leftBound() + this.wrapperWidth();
  }

  wrapperWidth() {
    return getOr(0, 'offsetWidth', this.cardsWrapper);
  }

  // eslint-disable-next-line class-methods-use-this
  getScrollWidth(b) {
    return getOr(0, 'scrollWidth', b);
  }

  getPossiblePositions() {
    return this.cards.map((card, index, arr) => {
      return arr.slice(0, index).reduce((a, b) => {
        return a + this.getScrollWidth(b);
      }, 0);
    });
  }

  getPossiblePages() {
    return this.getPossiblePositions().map((el, index) =>
      Math.floor((el + this.getScrollWidth(this.cards[index])) / this.wrapperWidth() + 1)
    );
  }

  handleScroll(scrollEvent) {
    const {onScroll} = this.props;
    if (onScroll) {
      const leftBound = this.leftBound();
      const rightBound = this.rightBound();

      const skip = this.getPossiblePositions().filter((el, index) => {
        return el + getOr(0, [index, 'scrollWidth'], this.cards) <= leftBound;
      }).length;
      const limit = this.getPossiblePositions().filter((el, index) => {
        return el + this.getScrollWidth(this.cards[index]) > leftBound && el < rightBound;
      }).length;
      onScroll(skip, limit);
    }
  }

  handleOnLeft() {
    const actualPage = this.state.actualPage;
    if (actualPage === 1) {
      return;
    }
    this.scrollTo(actualPage - 1);
  }

  handleOnRight() {
    const actualPage = this.state.actualPage;
    if (actualPage === this.maxPages()) {
      return;
    }
    this.scrollTo(actualPage + 1);
  }

  scrollTo(page) {
    const indexOfnextFirstCard = this.getPossiblePages().indexOf(page);
    const nextPosition = sumBy('scrollWidth', this.cards.slice(0, indexOfnextFirstCard));
    this.cardsWrapper.scrollLeft = nextPosition;
    this.updatePages(page);
  }

  updatePages(event_) {
    const isResize = typeof event_ === 'object' && event_.type === 'resize';
    if (isResize) this.forceUpdate();

    const nextState = {
      actualPage: typeof event_ === 'number' ? event_ : this.state.actualPage || 1
    };
    if (!isEqual(this.state, nextState)) this.setState(nextState);
  }

  maxPages() {
    return last(this.getPossiblePages()) || 0;
  }

  render() {
    const {title, showMore, cards, onShowMore, dataName, contentType} = this.props;
    const {skin} = this.context;

    const dark = getOr('#90A4AE', 'common.dark', skin);
    const titleStyle = onShowMore ? style.titleLink : style.title;
    const cardsView = map.convert({cap: false})((card, key) => {
      return (
        <div className={style.card} key={key} ref={this.setCards(key)}>
          <Card {...card} dataName={`${dataName}-${key}`} />
        </div>
      );
    }, cards);

    const leftCircleStyle = this.state.actualPage === 1 ? style.disabledCircle : style.circle;
    const leftArrowView = (
      <div className={leftCircleStyle} onClick={this.handleOnLeft}>
        <ArrowLeft color={dark} className={style.left} width={10} height={10} />
      </div>
    );
    const rightCircleStyle =
      this.state.actualPage === this.maxPages() ? style.disabledCircle : style.circle;
    const rightArrowView = (
      <div className={rightCircleStyle} onClick={this.handleOnRight}>
        <ArrowRight color={dark} className={style.right} width={10} height={10} />
      </div>
    );

    const titleView = (
      <span data-name="title" className={titleStyle} onClick={onShowMore}>
        <IconView contentType={contentType} />
        <span>{title}</span>
      </span>
    );

    const showMoreView =
      showMore && onShowMore ? <ShowMoreLink onShowMore={onShowMore} showMore={showMore} /> : null;

    const maxPages = this.maxPages();
    const restPages = this.state.actualPage || 0;
    const paging = `${restPages}/${maxPages}`;

    const pagingView = (
      <span data-name="paging">
        <span className={style.paging}>{paging}</span>
      </span>
    );
    return (
      <div className={style.wrapper} data-name="cardsList">
        <div className={style.list}>
          <div className={style.listWrapper}>
            <div data-name="header" className={style.header}>
              {titleView}
              <div className={style.pagingWrapper}>
                {showMoreView}
                {pagingView}
                {leftArrowView}
                {rightArrowView}
              </div>
            </div>
            <div className={style.cards} ref={this.setCardsWrapper}>
              {cardsView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsList;
