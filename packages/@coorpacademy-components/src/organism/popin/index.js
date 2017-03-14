import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import Button from '../../atom/button';
import Link from '../../atom/link';
import style from './style.css';

const Popin = (props, context) => {
  const {
    skin
  } = context;

  const {
    ctaLabel,
    ctaOnClick,
    header,
    headerOnClick,
    content
  } = props;

  function createMarkup() {
    return {__html: content};
  }

  const primary = getOr('#00B0FF', ['common', 'primary'], skin);

  return (
    <div className={style.default}>
      <div className={style.popin}>
        <div
          className={style.header}
          onClick={headerOnClick}
          data-name='popin-header'
        >
          {header}
        </div>
        <div className={style.content}>
          <div dangerouslySetInnerHTML={ // eslint-disable-line react/no-danger
              createMarkup()
            }
          />
        </div>
        <Button
          className={style.cta}
          onClick={ctaOnClick}
          submitValue={ctaLabel}
          centered
          style={{
            backgroundColor: primary
          }}
        />
      </div>
    </div>
  );
};

Popin.contextTypes = {
  skin: React.PropTypes.object
};

Popin.propTypes = {
  ctaLabel: PropTypes.string,
  ctaOnClick: PropTypes.func,
  headerOnClick: PropTypes.func,
  header: PropTypes.string,
  content: PropTypes.string
};

export default Popin;
