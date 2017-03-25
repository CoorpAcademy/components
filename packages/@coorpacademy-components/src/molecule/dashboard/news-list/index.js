import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import noop from 'lodash/fp/noop';
import News from '../../news';
import Loader from '../../../atom/loader';
import style from './style.css';

const NewsList = (props, context) => {
  const skin = context;
  const {
    title,
    news,
    more,
    loading = false
  } = props;

  const loadingView = (
    <div className={style.loader}>
      <Loader />
    </div>
  );

  const moreView = more ? (
    <div className={style.more}
      onClick={more.onClick} // eslint-disable-line react/jsx-handler-names
    >
      {more.label}
    </div>
  ) : null;

  const cardsView = news.map((nws, key) => {
    return (
      <div className={style.card}
        key={key}
      >
        <News
          {...nws}
        />
      </div>
    );
  });

  return (
    <div className={style.wrapper}>
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

NewsList.contextTypes = {
  skin: React.PropTypes.object
};

NewsList.propTypes = {
  title: React.PropTypes.string,
  news: React.PropTypes.array,
  more: React.PropTypes.shape({
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
  }),
  loading: React.PropTypes.bool
};

export default NewsList;
