import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import MediaIcon from '@coorpacademy/nova-icons/solid/videos/video-clip-3';
import ClueIcon from '@coorpacademy/nova-icons/solid/programming/programming-jigsaw';
import CoachIcon from '@coorpacademy/nova-icons/solid/messages-and-chat/chat-bubbles-circle';
import getOr from 'lodash/fp/getOr';
import Provider from '../../../atom/provider';
import style from './style.css';

const CONTENT_ICON_TYPES = {
  media: MediaIcon,
  clue: ClueIcon,
  coach: CoachIcon
};

const SlidesFooter = (props, context) => {
  const {skin} = context;
  const {buttons = []} = props;
  const xtraLightGrey = getOr('#FAFAFA', 'common.xtraLightGrey', skin);

  const buttonsView = buttons.map((button, key) => {
    const {disabled, notify, selected, highlighted, title, type, onClick} = button;

    const IconType = CONTENT_ICON_TYPES[type];

    const className = selected ? style.selected : style.button;

    const notifyView = notify ? <span className={style.notify} /> : null;

    return (
      <div className={disabled ? style.disabled : className} key={key} onClick={onClick}>
        <div className={highlighted ? style.highlighted : style.logo}>
          {notifyView}
          <IconType color={xtraLightGrey} />
        </div>
        <div className={style.title}>
          {title}
        </div>
      </div>
    );
  });

  return buttons.length > 0
    ? <div className={style.wrapper}>
        {buttonsView}
      </div>
    : null;
};

SlidesFooter.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SlidesFooter.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      notify: PropTypes.bool,
      selected: PropTypes.bool,
      highlighted: PropTypes.bool,
      title: PropTypes.string,
      type: PropTypes.oneOf(keys(CONTENT_ICON_TYPES)).isRequired,
      onClick: PropTypes.func
    })
  )
};

export default SlidesFooter;
