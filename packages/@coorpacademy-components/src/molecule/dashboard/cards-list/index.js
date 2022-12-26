import React from 'react';
import {
  debounce,
  throttle,
  get,
  getOr,
  map,
  sum,
  last,
  pipe,
  toPairs,
  reduce,
  head,
  findIndex,
  findLastIndex
} from 'lodash/fp';
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

const nextPage = (page, maxPages) => {
  if (page < 0) return maxPages;
  if (page > maxPages) return 0;
  return page;
};

IconView.propTypes = {
  contentType: PropTypes.string
};

class CardsList extends React.PureComponent {
  static propTypes = {
    contentType: PropTypes.string,
    dataName: PropTypes.string,
    title: PropTypes.string,
    showMore: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(Card.protoTypes)),
    onScroll: PropTypes.func,
    onShowMore: PropTypes.func,
    'arrows-aria-label': PropTypes.shape({
      showMoreOnLeftAriaLabel: PropTypes.string,
      showMoreOnRightAriaLabel: PropTypes.string
    })
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin,
    translate: Provider.childContextTypes.translate
  };

  constructor(props) {
    super(props);

    this.state = {
      actualPage: 0,
      maxPages: 0,
      scrollLeft: 0,
      offsetWidth: 0,
      possiblePositions: [],
      possiblePages: [],
      cardsWidth: 0
    };

    this.handleScroll_ = throttle(200, this.handleScroll.bind(this));
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnLeft = this.handleOnLeft.bind(this);
    this.handleOnRight = this.handleOnRight.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.updateState = debounce(200, this.updatePages.bind(this));
    this.updatePages = this.updatePages.bind(this);
    this.setCardsWrapper = this.setCardsWrapper.bind(this);
    this.getScrollWidth = this.getScrollWidth.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.cardsWrapper.addEventListener('scroll', this.handleScroll_);

    if (window) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentDidUpdate() {
    const {cards = []} = this.props;
    const {offsetWidth, cardsWidth} = this.state;
    const newCardsWidth = pipe(map(computeWidth), sum)(cards);

    if (newCardsWidth !== cardsWidth && offsetWidth !== 0) {
      this.updatePaginationState(cards);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        cardsWidth: newCardsWidth
      });
    }
  }

  componentWillUnmount() {
    this.cardsWrapper.removeEventListener('scroll', this.handleScroll_);

    if (window) {
      window.removeEventListener('resize', this.handleResize);
    }
    this.updateState.cancel();
  }

  handleResize() {
    const {cards = []} = this.props;
    this.updatePaginationState(cards);
  }

  updatePaginationState(cards) {
    const {offsetWidth: wrapperWidth, scrollLeft: wrapperScrollLeft} = this.state;

    const cardWidths = map(computeWidth)(cards);

    const possiblePositions = pipe(
      reduce(
        ([cardPositions, accWidth], cardWidth) => [
          [...cardPositions, accWidth],
          cardWidth + accWidth
        ],
        [[], 0]
      ),
      head
    )(cardWidths);

    const possiblePages = pipe(
      reduce(
        ([acc, pageIndex, accPageWidth], cardWidth) => {
          const pageWidth = accPageWidth + cardWidth;
          if (pageWidth > wrapperWidth) {
            return [[...acc, pageIndex + 1], pageIndex + 1, cardWidth];
          }
          return [[...acc, pageIndex], pageIndex, pageWidth];
        },
        [[], 0, 0]
      ),
      head
    )(cardWidths);

    const skip = findIndex(position => position >= wrapperScrollLeft, possiblePositions);
    const actualPage = possiblePages[skip + 1];

    this.setState({
      possiblePositions,
      possiblePages,
      maxPages: last(possiblePages),
      actualPage
    });
  }

  setCardsWrapper(element) {
    this.cardsWrapper = element;
    this.setState({
      scrollLeft: this.cardsWrapper?.scrollLeft,
      offsetWidth: this.cardsWrapper?.offsetWidth
    });
  }

  getScrollWidth(index) {
    const {cards = []} = this.props;
    const card = cards[index];
    return computeWidth(card);
  }

  handleScroll() {
    const scrollLeft = this.cardsWrapper?.scrollLeft;
    this.setState({scrollLeft});

    const {possiblePositions, offsetWidth} = this.state;
    const {onScroll} = this.props;
    if (onScroll) {
      const leftBound = scrollLeft;
      const rightBound = scrollLeft + offsetWidth;

      const leftIndex = findIndex(position => position > leftBound, possiblePositions) - 1;
      const rightIndex = findLastIndex(position => position < rightBound, possiblePositions);
      const skip = leftIndex;
      const limit = rightIndex - skip + 1;

      onScroll(skip, limit);
    }
  }

  handleOnLeft() {
    const {actualPage, maxPages} = this.state;
    this.scrollTo(nextPage(actualPage - 1, maxPages));
  }

  handleOnRight() {
    const {actualPage, maxPages} = this.state;
    this.scrollTo(nextPage(actualPage + 1, maxPages));
  }

  scrollTo(page) {
    const {possiblePages, possiblePositions} = this.state;
    const indexOfNextFirstCard = possiblePages.indexOf(page);
    const nextPosition = possiblePositions[indexOfNextFirstCard];
    this.cardsWrapper.scrollLeft = nextPosition;
    this.updatePages(page);
    this.setState({
      scrollLeft: nextPosition
    });
  }

  updatePages(actualPage) {
    this.setState({
      actualPage
    });
  }

  render() {
    const {
      title,
      showMore,
      cards,
      onShowMore,
      dataName,
      contentType,
      'arrows-aria-label': ariaLabel = {}
    } = this.props;
    const {skin} = this.context;
    const {maxPages} = this.state;
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
    const leftArrowView = (
      <div className={style.circle} onClick={this.handleOnLeft} data-name="card-list-left-arrow">
        <ArrowLeft
          color={dark}
          className={style.left}
          width={10}
          height={10}
          aria-label={ariaLabel.showMoreOnLeftAriaLabel}
        />
      </div>
    );
    const rightArrowView = (
      <div className={style.circle} onClick={this.handleOnRight} data-name="card-list-right-arrow">
        <ArrowRight
          color={dark}
          className={style.right}
          width={10}
          height={10}
          aria-label={ariaLabel.showMoreOnRightAriaLabel}
        />
      </div>
    );

    const titleView = (
      <span data-name="title" className={titleStyle} onClick={onShowMore}>
        <IconView contentType={contentType} />
        <span>{title}</span>
      </span>
    );

    const hasPages = maxPages > 0;
    const showMoreView =
      hasPages && showMore && onShowMore ? (
        <ShowMoreLink
          className={hasPages ? style.showMoreBar : style.showMore}
          onShowMore={onShowMore}
          showMore={showMore}
        />
      ) : null;

    const switchPagesView = hasPages ? (
      <div className={style.pagingWrapper}>
        {showMoreView}
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
