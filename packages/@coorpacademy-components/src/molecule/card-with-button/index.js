import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import Cta from '../../atom/cta';
import style from './style.css';

function backgroundImage(url) {
  return {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.65), 
      rgba(0, 0, 0, 0.65)
      ),url(${url})`,
    backgroundSize: 'cover'
  };
}

const Button = props => {
  const {onClick, submitValue, light = false} = props;
  return <Cta submitValue={submitValue} onClick={onClick} light={light} />;
};
const CardWithButton = props => {
  const {
    lightButtonLabel,
    primaryButtonLabel,
    tagLabel,
    onLightButtonClick,
    onPrimaryButtonClick,
    backgroundImg
  } = props;

  return (
    <div className={style.container}>
      <div className={style.imageBox}>
        <div className={style.filtre}>
          <div className={`${style.image} ${style.zoom}`} style={backgroundImage(backgroundImg)}>
            <div className={style.content}>
              {tagLabel ? (
                <div className={style.levelContainer}>
                  <div className={style.level}>
                    <p>{tagLabel}</p>
                  </div>
                </div>
              ) : null}
              {props.children ? <div className={style.avatar}>{props.children}</div> : null}
            </div>
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        {lightButtonLabel ? (
          <Button submitValue={lightButtonLabel} onClick={onLightButtonClick} light />
        ) : null}
        <Button submitValue={primaryButtonLabel} onClick={onPrimaryButtonClick} />
      </div>
    </div>
  );
};

CardWithButton.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Button.propTypes = {
  onClick: Cta.propTypes.onClick,
  submitValue: Cta.propTypes.submitValue
};

CardWithButton.propTypes = {
  lightButtonLabel: Button.propTypes.submitValue,
  primaryButtonLabel: Button.propTypes.submitValue.isRequired,
  tagLabel: Link.propTypes.children,
  onLightButtonClick: Button.propTypes.onClick,
  onPrimaryButtonClick: Button.propTypes.onClick.isRequired,
  backgroundImg: PropTypes.string.isRequired
};

export default CardWithButton;
