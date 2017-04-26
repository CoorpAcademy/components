import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../../atom/link';
import style from './style.css';

const StartBattle = (props, context) => {
  const {
    label,
    onClick,
    href
  } = props;

  return (
    <div
      className={style.container}
      data-name="start-battle"
    >
      <div className={style.wrapper}>
        <div className={style.start}>
          <Link className={style.animate}
            onClick={onClick}
            href={href}
          >
            <div className={style.icon} />
            <div className={style.bubble}>
              <div className={style.icon} />
            </div>
            <div className={style.label}
              dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
                __html: label
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

StartBattle.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default StartBattle;
