import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

const getOrBlank = getOr('');

const Card = (props, context) => {
  const {skin} = context;
  const {
    view,
    image,
    time,
    adaptiv,
    disabled,
    certification,
    type,
    title,
    author,
    cta,
    progress,
    topOnClick,
    bottomOnClick
  } = props;

  const defaultColor = getOr('#00B0FF', 'common.primary', skin);
  const cardStyle = view === 'dashboard' ? style.grid : style.list;

  const calltoaction = cta ? (
    <div className={style.cta}>{cta}</div>
  ) : null;

  const certif = certification ? (
    <div className={style.certification} />
  ) : null;

  const myprogress = !adaptiv ? (
    <div className={style.progressWrapper}>
      <div className={style.progress}
        style={{
          width: progress,
          background: defaultColor
        }}
      />
    </div>
  ) : (null);

  const adaptivIcon = adaptiv ? (
    <div className={style.adaptiv} />
  ) : null;

  const lock = disabled ? (
    <div className={style.lock} />
  ) : null;

  // const timer = <span className={style.timer}>{time}</span>;
  const timer = null;

  return (
    <div className={cardStyle}>
      <div
        className={style.default}
        disabled={disabled}
      >
        <div
          className={style.imageWrapper}
          style={{
            backgroundImage: image ? `url('${image}')` : 'none'
          }}
        >
          <div
            className={style.ctaWrapper}
            onClick={!disabled && topOnClick}
          >
            {calltoaction}
            <div className={style.overlay}
              style={{
                backgroundColor: defaultColor
              }}
            />
            {certif}
            {adaptivIcon}
            {timer}
          </div>
          {lock}
        </div>
        {myprogress}
        <div
          className={style.infoWrapper}
          onClick={!disabled && bottomOnClick}
        >
          <div className={style.type}
            style={{
              color: !disabled && defaultColor
            }}
          >
            {type}
          </div>
          <div className={style.title}>
            <div>
              {title}
            </div>
          </div>
          <div className={style.author}>
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.contextTypes = {
  skin: React.PropTypes.object
};

Card.propTypes = {
  view: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.string,
  disabled: PropTypes.bool,
  adaptiv: PropTypes.bool,
  certification: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  cta: PropTypes.string,
  progress: PropTypes.string,
  topOnClick: PropTypes.func,
  bottomOnClick: PropTypes.func
};

export default Card;
