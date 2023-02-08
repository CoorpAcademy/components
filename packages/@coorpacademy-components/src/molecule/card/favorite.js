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
    onFavoriteClick: PropTypes.func,
    'aria-label': PropTypes.shape({
      favorite: PropTypes.string,
      addToFavorite: PropTypes.string,
      removeFromFavorite: PropTypes.string
    })
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
    const {
      favorite,
      addFavoriteToolTip,
      removeFavoriteToolTip,
      className,
      'aria-label': ariaLabel = {}
    } = this.props;

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
          aria-label={ariaLabel.favorite}
          className={classnames(style.favorite, className, favorite && style.selected)}
          onClick={this.handleFavoviteClick}
          style={{
            color: primaryColor
          }}
        >
          {favorite ? (
            <CheckIcon
              className={style.checkIcon}
              style={{color: brandColor}}
              width={13}
              height={13}
              aria-label={ariaLabel.removeFromFavorite}
            />
          ) : (
            <MoreIcon
              className={style.moreIcon}
              style={{color: darkColor}}
              width={13}
              height={13}
              aria-label={ariaLabel.addToFavorite}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Favorite;
