import React from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import stopPropagation from '../../util/bubbling';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import style from './analytics-popin.css';

const AnalyticsPopin = (props, context) => {
  const {skin} = context;

  const {ctaLabel, ctaOnClick, header, closeOnClick, content} = props;

  function createMarkup() {
    return {__html: content};
  }

  const primary = getOr('#00B0FF', ['common', 'primary'], skin);

  function onCloseClick(e) {
    stopPropagation(e);
    closeOnClick(e);
  }

  return (
    <div className={style.default} onClick={onCloseClick}>
      <div className={style.popin}>
        <div className={style.header} onClick={onCloseClick} data-name="popin-header">
          {header}
        </div>
        <div className={style.content}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
        <Button
          type="link"
          onClick={ctaOnClick}
          submitValue={ctaLabel}
          style={{
            backgroundColor: primary
          }}
        />
      </div>
    </div>
  );
};

AnalyticsPopin.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AnalyticsPopin.propTypes = {
  ctaLabel: PropTypes.string,
  ctaOnClick: PropTypes.func,
  closeOnClick: PropTypes.func,
  header: PropTypes.string,
  content: PropTypes.string
};

export default AnalyticsPopin;
