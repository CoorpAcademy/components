import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../../atom/button-link';
import style from './style.css';

const ReviewBanner = (props, context) => {
  const {title, subtitle, cta} = props;

  const buttonProps = {
    ...cta,
    type: 'primary'
  };

  return (<div className={style.root} data-name="start-battle">
      <div className={style.container}>
        <div className={style.middle}>
          <ButtonLink {...buttonProps} />
        </div>
      </div>
    </div>);
};


ReviewBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string
  })
};

export default React.memo(ReviewBanner);
