import React, {Component} from 'react';
import Konva from 'konva';
import {Image as Img} from 'react-konva';

const isVisible = removing => {
  if (!removing) {
    return true;
  }

  const gap = removing.duration / 5;

  return Math.floor(removing.cursor / gap) % 2 === 0;
};

class Block extends Component {
  componentDidMount = this.cacheNode;

  componentDidUpdate = this.cacheNode;

  cacheNode = () => this.node.cache();

  render() {
    const {image, color, x, y, size, removing} = this.props;
    const [red, green, blue] = color;
    const visible = isVisible(removing);

    return (
      <Img
        filters={[Konva.Filters.RGBA]}
        red={red}
        green={green}
        blue={blue}
        alpha={0.3}
        image={image}
        width={size}
        height={size}
        x={x}
        y={y}
        visible={visible}
        ref={node => {
          this.node = node;
        }}
      />
    );
  }
}

export default Block;
