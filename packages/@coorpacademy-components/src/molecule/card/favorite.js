import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty} from 'lodash/fp';
import {
  NovaCompositionNavigationMore as MoreIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon
} from '@coorpacademy/nova-icons';
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
    const {favorite, addFavoriteToolTip, removeFavoriteToolTip, className} = this.props;

    const primaryColor = get('common.primary', skin);
    const darkColor = get('common.dark', skin);
    const brandColor = get('common.brand', skin);
    const toolTipView = !isEmpty(removeFavoriteToolTip) && !isEmpty(addFavoriteToolTip) && (
      <div className={style.showToolTip}>
        <span>{favorite ? removeFavoriteToolTip : addFavoriteToolTip}</span>
      </div>
    );

    return (
      <div className={style.blocFavorite}>
        {toolTipView}
        <div
          data-name="favorite"
          className={classnames(style.favorite, className, favorite && style.selected)}
          onClick={e => this.handleFavoviteClick(e)}
          style={{
            color: primaryColor
          }}
        >
          {favorite ? (
            <CheckIcon className={style.checkIcon} color={brandColor} />
          ) : (
            <MoreIcon className={style.moreIcon} color={darkColor} />
          )}
        </div>
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
  addFavoriteToolTip: PropTypes.string,
  removeFavoriteToolTip: PropTypes.string,
  onFavoriteClick: PropTypes.func
};

export default Favorite;
