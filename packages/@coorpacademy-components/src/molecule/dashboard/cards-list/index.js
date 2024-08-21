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
  NovaSolidContentContentBook1 as LearnerIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Card, {cardPropTypes} from '../../card';
import LearningPriorityCard from '../../learning-priority-card';
import Icon from '../../../atom/icon';
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
      <IconType style={{color: dark}} className={style.icon} data-contenttype={contentType} />
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
  /**
   * IMPORTANT: update prop-types.ts too, 1st a migration of tests
   * is intended, then, a TS + functional refactor is planned.
   */
  static propTypes = {
    contentType: PropTypes.string,
    dataName: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    showMore: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(cardPropTypes)),
    customStyle: PropTypes.objectOf(PropTypes.string),
    onScroll: PropTypes.func,
    onShowMore: PropTypes.func,
    'arrows-aria-label': PropTypes.shape({
      showMoreOnLeftAriaLabel: PropTypes.string,
      showMoreOnRightAriaLabel: PropTypes.string
    }),
    type: PropTypes.oneOf(['cards']),
    key: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    testingSizes: PropTypes.any
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

    // for testing purposes only - no other way to test this polluted component
    if (props.testingSizes) {
      const {offsetWidth, scrollLeft, maxPages, possiblePages, possiblePositions} =
        props.testingSizes;
      this.state.offsetWidth = offsetWidth;
      this.state.scrollLeft = scrollLeft;
      this.state.maxPages = maxPages;
      this.state.possiblePages = possiblePages;
      this.state.possiblePositions = possiblePositions;
    }
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

  /* istanbul ignore next */
  handleResize() {
    const {cards = []} = this.props;
    this.updatePaginationState(cards);
  }

  /* istanbul ignore next */
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

  /* istanbul ignore next */
  getScrollWidth(index) {
    const {cards = []} = this.props;
    const card = cards[index];
    return computeWidth(card);
  }

  /* istanbul ignore next */
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
      customStyle = {},
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
            {card && card.type === 'learningPriority' ? (
              <LearningPriorityCard {...card} />
            ) : (
              <Card {...card} dataName={`${dataName}-${key}`} />
            )}
          </div>
        );
      })
    )(cards);

    const arrowIconProps = {
      color: dark,
      preset: 's',
      borderRadius: '8px',
      ariaLabel: ariaLabel.showMoreOnLeftAriaLabel
    };

    const arrows = (
      <div className={style.arrowsWrapper}>
        <div className={style.arrow} onClick={this.handleOnLeft} data-name="card-list-left-arrow">
          <Icon {...arrowIconProps} iconName="arrow-left" />
        </div>
        <div className={style.arrow} onClick={this.handleOnRight} data-name="card-list-right-arrow">
          <Icon {...arrowIconProps} iconName="arrow-right" />
        </div>
      </div>
    );

    const titleView =
      typeof title === 'string' ? (
        <span data-name="title" className={titleStyle} onClick={onShowMore}>
          <IconView contentType={contentType} />
          <span>{title}</span>
        </span>
      ) : (
        <span className={style.titleNode}>{title}</span>
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
        {arrows}
      </div>
    ) : null;

    return (
      <div
        className={style.wrapper}
        style={customStyle}
        data-name="cardsList"
        data-max-pages={`${maxPages}`}
        // eslint-disable-next-line react/destructuring-assignment
        data-actual-page={`${this.state.actualPage}`}
        data-scroll-left={this.cardsWrapper?.scrollLeft}
      >
        <div className={style.list}>
          <div>
            <div data-name="header" className={style.header}>
              {titleView}
              {switchPagesView}
            </div>
            <div
              className={style.cards}
              data-testid="cards-view-wrapper"
              ref={this.setCardsWrapper}
            >
              {cardsView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsList;
