import React from 'react';
import map from 'lodash/fp/map';
import Color from 'color';
import Block from './block';

const Tower = props => {
  const {color, blocks, x, bottom, blockSize, blockImage} = props;

  return map(block => (
    <Block
      x={x}
      y={bottom - blockSize * (block.stage + 1)}
      image={blockImage}
      size={blockSize}
      color={Color(color).rgb().array()}
      removing={block.removing}
    />
  ), blocks);
};

export default Tower;
