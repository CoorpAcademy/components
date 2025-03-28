import React from 'react';
import FaIcon from '../../atom/icon';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import propTypes, {IconPreviewProps} from './types';
import style from './style.css';

const IconPreview = (props: IconPreviewProps) => {
  const {icon, title} = props;
  return (
    <div
      className={style.iconPreviewWrapper}
      style={{background: createGradientBackground(icon.color, '93%', '100%')}}
    >
      <div className={style.iconPreview}>
        <div className={style.iconWrapper}>
          <FaIcon
            {...{
              iconName: icon.name,
              iconColor: icon.color,
              size: {
                faSize: 36,
                wrapperSize: 80
              },
              gradientBackground: true
            }}
          />
        </div>
        <div className={style.titleWrapper}>{title}</div>
      </div>
    </div>
  );
};

IconPreview.propTypes = propTypes;

export default IconPreview;
