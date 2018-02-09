import React, {Component} from 'react';
import Konva from 'konva';
import {Image} from 'react-konva';

const isVisible = removing => {
  if (!removing) {
    return true;
  }

  const gap = removing.duration / 5;

  return Math.floor(removing.cursor / gap) % 2 === 0;
}

class Block extends Component {

  cacheNode = () => this.node.cache();
  componentDidMount = this.cacheNode;
  componentDidUpdate = this.cacheNode;

  render() {
    const {image, color, x, y, size, removing} = this.props;
    const [red, green, blue] = color;
    const visible = isVisible(removing);

    return (
      <Image
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
          this.node = node
        }}
      />
    );
  }

}

export default Block;
