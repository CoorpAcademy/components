import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Provider from '../../../atom/provider';
import style from './style.css';

const QCMImage = (props, context) => {
  const {answers} = props;

  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected, image} = answer;
    const {skin} = context;

    const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);
    const selectedStyle = selected ? {backgroundColor: primarySkinColor} : null;
    return (
      <div
        className={selected ? style.selected : style.answer}
        onClick={onClick}
        data-selected={selected}
        data-name="answerGraphic"
        style={selectedStyle}
        key={key}
      >
        <div
          className={style.imageWrapper}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        <div
          className={style.titleWrapper}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: title
          }}
        />
      </div>
    );
  });

  return (
    <div data-name="qcm-graphic-wrapper" className={style.wrapper}>
      {answersViews}
    </div>
  );
};

QCMImage.contextTypes = {
  skin: Provider.childContextTypes.skin
};

QCMImage.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      selected: PropTypes.bool,
      onClick: PropTypes.func,
      image: PropTypes.string
    })
  )
};

export default QCMImage;
