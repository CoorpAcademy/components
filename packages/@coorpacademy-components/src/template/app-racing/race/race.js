import React from 'react';
import color from 'color';
import range from 'lodash/fp/range';
import map from 'lodash/fp/map';
import {Stage, Layer, Image, Rect} from 'react-konva';
import Tower from './tower';

const Race = props => {
  const {width, height, images, goal, towers} = props;
  const {groundTile, cloud, goalTile, block} = images;
  const skyHeight = height - groundTile.height;
  const blocksUpSpace = 2;
  const blockSize = Math.floor(skyHeight / (goal - 1 + blocksUpSpace));
  const spaceBetweenTowers = (width - (blockSize * towers.length)) / (towers.length + 1);

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Rect width={width} height={height} fill="#a0d0e7" />
      </Layer>
      <Layer>
        {map(index => (
          <Image
            key={`tile-${index}`}
            image={groundTile.image}
            x={groundTile.width * index}
            y={height - groundTile.height}
          />
        ), range(0, Math.ceil(width / groundTile.width), 1))}
        <Image image={cloud.image} x={width - cloud.width * 1.5} y={cloud.height * 2} />
        <Image image={cloud.image} x={cloud.width} y={cloud.height * 2.5} />
        <Image image={cloud.image} x={width / 2} y={cloud.height * 4} />
      </Layer>
      <Layer>
        {map(tower => (
          <Tower
            {...tower}
            x={spaceBetweenTowers + (spaceBetweenTowers + blockSize) * tower.position}
            bottom={height - groundTile.height}
            blockSize={blockSize}
            blockImage={images.block.image}
          />
        ), towers)}
      </Layer>
      <Layer>
        <Image
          opacity={0.5}
          fillPatternImage={goalTile.image}
          fillPatternX={Math.ceil(width / goalTile.height)}
          x={0}
          y={blockSize * (blocksUpSpace + 1) - goalTile.height}
          width={width}
          height={goalTile.height}
        />
      </Layer>
    </Stage>
  );
};

export default Race;
