import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Card from '../../molecule/card';
import Loader from '../../atom/loader';
import style from './style.css';

export interface CardProps {
  key?: React.Key;
  badge?: string;
  image?: string;
  disabled?: boolean;
  adaptiv?: boolean;
  type?: string;
  title?: string;
  author?: string;
  certifiedAuthor?: boolean;
  customer?: Record<string, unknown>;
  progress: number;
  favorite?: boolean;
  addFavoriteToolTip?: string;
  removeFavoriteToolTip?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFavoriteClick?: () => void;
  isSelected?: boolean;
  notification?: Record<string, unknown>;
  badgeCategory?: string;
  badgeLabel?: string;
  theme?: 'default' | 'coorpmanager';
  disabledContent?: string;
  'aria-label'?: string;
  'background-aria-label'?: string;
  'favorite-aria-label'?: string;
  'selectable-aria-label'?: string;
  'customer-aria-label'?: string;
  'badge-aria-label'?: string;
  'disabled-aria-label'?: string;
  'card-content-aria-label'?: string;
}

export interface CardsGridProps {
  list: CardProps[];
  customStyle?: Record<string, string>;
  loading?: boolean;
}

const CardsGrid = (props: CardsGridProps) => {
  const {list = [], customStyle = {}, loading = false} = props;

  const loader = loading ? (
    <div className={style.loader}>
      <Loader />
    </div>
  ) : null;

  const cards = map(cardProps => {
    return (
      <div data-name="cardGrid" className={style.card} key={cardProps.key}>
        <Card {...cardProps} />
      </div>
    );
  }, list);

  return (
    <div className={style.defaultStyle} style={customStyle}>
      {cards}
      {loader}
    </div>
  );
};

CardsGrid.propTypes = {
  // @ts-expect-error component is not typed & wrapped into memo
  list: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  customStyle: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool
};

export default CardsGrid;
