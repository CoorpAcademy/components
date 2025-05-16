import React from 'react';
import FaIcon from '../../atom/icon';
import {createGradientBackground} from '../../util/get-background-gradient-color';
import propTypes, {IconPreviewProps} from './types';
import style from './style.css';

const DEFAULT_GAP = '32px';
type IconPreviewCustomProps = IconPreviewProps & {
  customStyle?: React.CSSProperties;
};

const IconPreview = (props: IconPreviewCustomProps) => {
  const {icon, title, customStyle = {}} = props;

  // explicit disable to override only if customStyle is provided otherwise merged in style.
  // eslint-disable-next-line @coorpacademy/coorpacademy/no-overwriting-spread
  const mergedStyle = {
    gap: DEFAULT_GAP,
    padding: '72px 48px 64px 48px',
    ...customStyle
  };

  return (
    <div
      className={style.iconPreviewWrapper}
      style={{
        background: createGradientBackground(icon.color, '93%', '100%')
      }}
    >
      <div className={style.iconPreview} style={mergedStyle}>
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
        <div className={style.titleWrapper} title={title}>
          {title}
        </div>
      </div>
    </div>
  );
};

IconPreview.propTypes = propTypes;

export default IconPreview;
