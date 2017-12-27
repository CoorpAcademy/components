import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import style from './style.css';

const viewStyle = {
  grid: style.grid,
  list: style.list
};

const Timer = ({time, color}) => (
  <div className={style.timer}>
    <ClockIcon className={style.clockIcon} color={color} /> {time}
  </div>
);

const AdaptivBubble = ({background, color}) => (
  <div className={style.adaptiv} style={{backgroundColor: background}}>
    <AdaptivIcon className={style.adaptivIcon} color={color} />
  </div>
);

const Adaptive = (props, context) => {
  const {skin} = context;
  const {
    title,
    type,
    description,
    media
  } = props;

  return (
    <div
      className={style.adaptiveWrapper}
      data-name="adaptive"
    >
      <div className={style.title}>{title}</div>
      <div>
        <div className={style.description}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: description}}
        />
        <div><img src={media.src[0].url} /></div>
      </div>
    </div>
  );
};

Adaptive.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Adaptive.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  media: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string
    }))
  }),
};

export default Adaptive;
