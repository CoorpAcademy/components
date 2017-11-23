import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keys from 'lodash/fp/keys';
import MediaIcon from '@coorpacademy/nova-icons/solid/videos/video-clip-3';
import ClueIcon from '@coorpacademy/nova-icons/solid/programming/programming-jigsaw';
import ContextIcon from '@coorpacademy/nova-icons/solid/locations/compass-3';
import CoachIcon from '@coorpacademy/nova-icons/solid/messages-and-chat/chat-bubbles-circle';
import get from 'lodash/fp/get';
import Provider from '../../../atom/provider';
import style from './style.css';

const TABS = {
  media: {
    icon: MediaIcon
  },
  clue: {
    icon: ClueIcon
  },
  coach: {
    icon: CoachIcon,
    className: style.coach
  },
  context: {
    icon: ContextIcon
  }
};

const SlidesFooter = (props, context) => {
  const {skin} = context;
  const {buttons = []} = props;
  const xtraLightGrey = get('common.xtraLightGrey', skin);

  const buttonsView = buttons.map((button, key) => {
    const {disabled, notify, selected, highlighted, title, type, onClick} = button;

    const IconType = get([type, 'icon'], TABS);

    const className = classnames(
      style.button,
      get([type, 'className'], TABS),
      selected && style.selected,
      disabled && style.disabled
    );

    const notifyView = notify ? <span className={style.notify} /> : null;

    return (
      <div data-name="button" data-type={type} className={className} key={key} onClick={onClick}>
        <div className={highlighted ? style.highlighted : style.logo}>
          {notifyView}
          <IconType color={xtraLightGrey} />
        </div>
        <div data-name="title" className={style.title}>
          {title}
        </div>
      </div>
    );
  });

  return buttons.length > 0 ? (
    <div data-name="slidesFooter" className={style.wrapper}>
      {buttonsView}
    </div>
  ) : null;
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
      type: PropTypes.oneOf(keys(TABS)).isRequired,
      onClick: PropTypes.func
    })
  )
};

export default SlidesFooter;
