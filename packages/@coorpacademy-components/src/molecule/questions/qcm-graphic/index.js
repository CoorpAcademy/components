import React from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import Provider from '../../../atom/provider';
import {innerHTML} from '../../../atom/label/style.css';
import {getShadowBoxColorFromPrimary} from '../../../util/get-shadow-box-color-from-primary';
import style from './style.css';

const QCMImage = (props, context) => {
  const {answers} = props;
  const {skin} = context;
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const answersViews = answers.map((answer, key) => {
    const {onClick, title, selected, image, ariaLabel} = answer;

    return (
      <div
        onClick={onClick}
        data-selected={selected}
        data-name="answerGraphic"
        style={{
          ...(selected && {
            boxShadow: `0 4px 16px ${getShadowBoxColorFromPrimary(primarySkinColor)}`
          })
        }}
        className={selected ? style.selected : style.answer}
        key={key}
      >
        <div
          data-name="answerBackground"
          style={{
            backgroundColor: selected ? primarySkinColor : '#F4F4F5'
          }}
          className={style.background}
        />
        <div data-name="answerContent" className={style.content}>
          <div
            className={style.imageWrapper}
            data-name="answerImage"
            aria-label={ariaLabel || title}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
          <div data-name="answerText" className={style.titleWrapper}>
            <div
              className={classnames(style.title, innerHTML)}
              style={{
                ...(selected && {color: primarySkinColor})
              }}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: title}}
            />
          </div>
        </div>
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
      image: PropTypes.string,
      ariaLabel: PropTypes.string
    })
  )
};

export default QCMImage;
