import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import classnames from 'classnames';
import style from './style.css';

const ImageBlock = props => {
  const {type, imageUrl, svgContent, className: customClassName} = props;
  const className = classnames(style.imageBlock, customClassName);

  return type === 'svg' && svgContent ? (
    <SVGInline className={className} svg={svgContent} />
  ) : (
    <img className={className} src={imageUrl} />
  );
};

ImageBlock.propTypes = {
  type: PropTypes.oneOf(['bitmap', 'svg']).isRequired,
  imageUrl: PropTypes.string.isRequired,
  svgContent: PropTypes.string,
  className: PropTypes.string
};

export default ImageBlock;
