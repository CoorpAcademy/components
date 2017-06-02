import React from 'react';
import PropTypes from 'prop-types';
import News from '../../news';
import Loader from '../../../atom/loader';
import style from './style.css';

const NewsList = (props, context) => {
  const {title, news, more, loading = false} = props;

  const loadingView = (
    <div className={style.loader}>
      <Loader />
    </div>
  );

  const moreView = more
    ? // eslint-disable-next-line react/jsx-handler-names
      <div className={style.more} onClick={more.onClick}>
        {more.label}
      </div>
    : null;

  const cardsView = news.map((nws, key) => {
    return (
      <div className={style.card} key={key}>
        <News {...nws} />
      </div>
    );
  });

  return (
    <div className={style.wrapper} data-name="news-list">
      <div className={style.list}>
        <div className={style.title}>
          {title}
        </div>
        {cardsView}
        {loading ? loadingView : moreView}
      </div>
    </div>
  );
};

NewsList.propTypes = {
  title: PropTypes.string,
  news: PropTypes.arrayOf(PropTypes.shape(News.propTypes)),
  more: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  loading: PropTypes.bool
};

export default NewsList;
