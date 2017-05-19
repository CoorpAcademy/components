import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import style from './style.css';

const buttonStyle = {
  media: style.media,
  clue: style.clue,
  coach: style.coach
};

const SlidesFooter = (props, context) => {
  const {buttons = []} = props;

  const buttonsView = buttons.map((button, key) => {
    const {disabled, notify, selected, highlighted, title, type, onClick} = button;

    const className = selected ? style.selected : style.button;

    const notifyView = notify ? <span className={style.notify} /> : null;

    return (
      <div className={disabled ? style.disabled : className} key={key} onClick={onClick}>
        <div className={highlighted ? style.highlighted : style.logo}>
          {notifyView}
          <span className={buttonStyle[type]} />
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

SlidesFooter.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      notify: PropTypes.bool,
      selected: PropTypes.bool,
      highlighted: PropTypes.bool,
      title: PropTypes.string,
      type: PropTypes.oneOf(keys(buttonStyle)).isRequired,
      onClick: PropTypes.func
    })
  )
};

export default SlidesFooter;
