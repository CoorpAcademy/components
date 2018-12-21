import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import {NovaSolidBookmarksTagsBookmark5 as BookmarkIcon} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import style from './favorite.css';

class Favorite extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleFavoviteClick = this.handleFavoviteClick.bind(this);
  }

  handleFavoviteClick(e) {
    e.stopPropagation();
    e.preventDefault();
    return !this.props.disabled && this.props.onFavoriteClick && this.props.onFavoriteClick(e);
  }

  render() {
    const {skin} = this.context;
    const {favorite, className} = this.props;

    const primaryColor = get('common.primary', skin);
    return (
      <div
        data-name="favorite"
        className={classnames(style.favorite, className, favorite && style.selected)}
        onClick={e => this.handleFavoviteClick(e)}
        style={{
          color: primaryColor
        }}
      >
        <BookmarkIcon className={style.bookmarkIcon} height={30} color={null} stroke={null} />
      </div>
    );
  }
}
Favorite.contextTypes = {
  skin: Provider.childContextTypes.skin
};
Favorite.propTypes = {
  className: PropTypes.string,
  favorite: PropTypes.bool,
  disabled: PropTypes.bool,
  onFavoriteClick: PropTypes.func
};

export default Favorite;
