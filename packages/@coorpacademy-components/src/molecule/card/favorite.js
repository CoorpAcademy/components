import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty, noop} from 'lodash/fp';
import {
  NovaCompositionNavigationMore as MoreIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import style from './favorite.css';

class Favorite extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    favorite: PropTypes.bool,
    disabled: PropTypes.bool,
    addFavoriteToolTip: PropTypes.string,
    removeFavoriteToolTip: PropTypes.string,
    onFavoriteClick: PropTypes.func
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props, context) {
    super(props, context);
    this.handleFavoviteClick = this.handleFavoviteClick.bind(this);
  }

  handleFavoviteClick(e) {
    const {disabled, onFavoriteClick = noop} = this.props;
    e.stopPropagation();
    e.preventDefault();
    if (!disabled) onFavoriteClick(e);
  }

  render() {
    const {skin} = this.context;
    const {favorite, addFavoriteToolTip, removeFavoriteToolTip, className} = this.props;

    const primaryColor = get('common.primary', skin);
    const darkColor = get('common.dark', skin);
    const brandColor = get('common.brand', skin);
    const toolTipView =
      !isEmpty(removeFavoriteToolTip) && !isEmpty(addFavoriteToolTip) ? (
        <div className={style.showToolTip}>
          <span>{favorite ? removeFavoriteToolTip : addFavoriteToolTip}</span>
        </div>
      ) : null;

    return (
      <div className={style.blocFavorite}>
        {toolTipView}
        <div
          data-name="favorite"
          className={classnames(style.favorite, className, favorite && style.selected)}
          onClick={this.handleFavoviteClick}
          style={{
            color: primaryColor
          }}
        >
          {favorite ? (
            <CheckIcon className={style.checkIcon} color={brandColor} width={13} height={13} />
          ) : (
            <MoreIcon className={style.moreIcon} color={darkColor} width={13} height={13} />
          )}
        </div>
      </div>
    );
  }
}

export default Favorite;
