import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from '../../atom/icon';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import style from './style.css';

const IconPreview = props => {
  const {iconName, iconColor, title} = props;
  return (
    <div
      className={style.iconPreviewWrapper}
      style={{background: createGradientBackground(iconColor, '93%', '100%')}}
    >
      <div className={style.iconPreview}>
        <div className={style.iconWrapper}>
          <FaIcon
            iconName={iconName}
            iconColor={iconColor}
            gradientBackground
            size={{
              faSize: 36,
              wrapperSize: 80
            }}
          />
        </div>
        <div className={style.titleWrapper}>{title}</div>
      </div>
    </div>
  );
};

IconPreview.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  title: PropTypes.string
};

export default IconPreview;
