import React from 'react';
import {debounce, get, getOr, map, sum, last, pipe, toPairs} from 'lodash/fp';
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
  const {onShowMore, showMore, className} = props;
  return (
    <div className={className} onClick={onShowMore}>
      {showMore}
    </div>
  );
};

ShowMoreLink.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ShowMoreLink.propTypes = {
  onShowMore: PropTypes.func,
  showMore: PropTypes.string,
  className: PropTypes.string
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

const computeWidth = card => {
  switch (card && card.type) {
    case 'chapter':
      return 219;
    default:
      return 272;
  }
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

    this.state = {
      actualPage: null,
      scrollLeft: 0,
      offsetWidth: 0
    };

    this.leftBound = this.leftBound.bind(this);
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

  componentWillUnmount() {
    this.cardsWrapper.removeEventListener('scroll', this.handleScroll);

    if (window) {
      window.removeEventListener('resize', this.updateState);
    }
    this.updateState.cancel();
  }

  setCardsWrapper(element) {
    this.cardsWrapper = element;
    this.setState({
      scrollLeft: this.cardsWrapper.scrollLeft,
      offsetWidth: this.cardsWrapper.offsetWidth
    });
  }

  leftBound() {
    const {scrollLeft} = this.state;
    return scrollLeft;
  }

  wrapperWidth() {
    const {offsetWidth} = this.state;
    return offsetWidth;
  }

  getScrollWidth(index) {
    const {cards = []} = this.props;
    const card = cards[index];

    return computeWidth(card);
  }

  getPossiblePositions() {
    const {cards = []} = this.props;
    return cards.map((card, index, arr) => {
      return arr.slice(0, index).reduce((a, b, currentIndex) => {
        return a + this.getScrollWidth(currentIndex);
      }, 0);
    });
  }

  getPossiblePages() {
    return this.getPossiblePositions().map((position, index) =>
      Math.ceil((position + this.getScrollWidth(index)) / this.wrapperWidth())
    );
  }

  handleScroll() {
    const scrollLeft = this.cardsWrapper.scrollLeft || 0;

    const {onScroll} = this.props;
    const {offsetWidth} = this.state;
    if (onScroll) {
      const leftBound = scrollLeft;
      const rightBound = scrollLeft + offsetWidth;

      const possiblePositions = this.getPossiblePositions();

      const skip = possiblePositions.filter((position, index) => {
        return position + this.getScrollWidth(index) <= leftBound;
      }).length;
      const limit = possiblePositions.filter((position, index) => {
        return position + this.getScrollWidth(index) > leftBound && position < rightBound;
      }).length;

      onScroll(skip, limit);
    }

    this.setState({
      scrollLeft
    });
  }

  handleOnLeft() {
    const {actualPage} = this.state;
    if (actualPage > 1) {
      this.scrollTo(actualPage - 1);
    }
  }

  handleOnRight() {
    const {actualPage, maxPages} = this.state;
    if (actualPage < maxPages) {
      this.scrollTo(actualPage + 1);
    }
  }

  scrollTo(page) {
    const {cards = []} = this.props;
    const indexOfNextFirstCard = this.getPossiblePages().indexOf(page);
    const nextPosition = pipe(map(computeWidth), sum)(cards.slice(0, indexOfNextFirstCard));
    this.cardsWrapper.scrollLeft = nextPosition;
    this.updatePages(page);
    this.setState({
      scrollLeft: nextPosition
    });
  }

  updatePages(event_) {
    const isResize = typeof event_ === 'object' && event_.type === 'resize';

    const {actualPage, scrollLeft} = this.state;

    let nextPage;
    if (isResize) {
      this.cardsWidths = [];
      const leftBound = scrollLeft;
      const skip = this.getPossiblePositions().filter(position => position <= leftBound).length;
      nextPage = this.getPossiblePages()[skip + 1];
    } else {
      nextPage = typeof event_ === 'number' ? event_ : actualPage || 1;
    }

    this.setState({
      actualPage: nextPage,
      maxPages: this.maxPages()
    });
  }

  maxPages() {
    return last(this.getPossiblePages()) || 0;
  }

  render() {
    const {title, showMore, cards, onShowMore, dataName, contentType} = this.props;
    const {skin} = this.context;
    const {actualPage, maxPages} = this.state;
    const dark = getOr('#90A4AE', 'common.dark', skin);
    const titleStyle = onShowMore ? style.titleLink : style.title;
    const cardsView = pipe(
      toPairs,
      map(([key, card]) => {
        return (
          <div className={style.card} key={key}>
            <Card {...card} dataName={`${dataName}-${key}`} />
          </div>
        );
      })
    )(cards);

    const leftCircleStyle = actualPage === 1 ? style.disabledCircle : style.circle;
    const rightCircleStyle = actualPage === maxPages ? style.disabledCircle : style.circle;

    const leftArrowView = (
      <div className={leftCircleStyle} onClick={this.handleOnLeft}>
        <ArrowLeft color={dark} className={style.left} width={10} height={10} />
      </div>
    );
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

    const hasPages = maxPages > 1;
    const showMoreView =
      hasPages && showMore && onShowMore ? (
        <ShowMoreLink
          className={hasPages ? style.showMoreBar : style.showMore}
          onShowMore={onShowMore}
          showMore={showMore}
        />
      ) : null;

    const restPages = actualPage || 0;
    const paging = `${restPages} / ${maxPages}`;

    const pagingView = (
      <span data-name="paging">
        <span className={style.paging}>{paging}</span>
      </span>
    );
    const switchPagesView = hasPages ? (
      <div className={style.pagingWrapper}>
        {showMoreView}
        {pagingView}
        {leftArrowView}
        {rightArrowView}
      </div>
    ) : null;
    return (
      <div className={style.wrapper} data-name="cardsList">
        <div className={style.list}>
          <div>
            <div data-name="header" className={style.header}>
              {titleView}
              {switchPagesView}
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
