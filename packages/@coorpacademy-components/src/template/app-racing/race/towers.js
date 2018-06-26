import countBy from 'lodash/fp/countBy';
import defer from 'lodash/fp/defer';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import PropTypes from 'prop-types';
import style from './towers.css';

const _map = map.convert({cap: false});
const BLOCKS = [
  'https://user-images.githubusercontent.com/910636/41063327-a380f744-69d8-11e8-85da-a6f6f3d81a17.png',
  'https://user-images.githubusercontent.com/910636/41063878-3c07c3ac-69da-11e8-967e-bf62657d57b3.png',
  'https://user-images.githubusercontent.com/910636/41063879-3c37737c-69da-11e8-8f89-c5ecd5de9534.png',
  'https://user-images.githubusercontent.com/910636/41063880-3c680cf8-69da-11e8-9d96-3bb6701ef9cf.png',
  'https://user-images.githubusercontent.com/910636/41063881-3c957008-69da-11e8-83e4-374509a9c5ed.png'
];

const Square = ({image, type, index, height, bottom, motionStyle}) => (
  <div
    className={style.block}
    style={{
      height,
      bottom,
      backgroundImage: `url(${image}`,
      transform: `rotate(${90 * index}deg)`,
      ...motionStyle
    }}
  />
);

const Block = ({image, index, type, height, bottom, maxStiffness}) => {
  switch (type) {
    case 'new':
      return (
        <Motion
          defaultStyle={{y: 1000}}
          style={{y: spring(bottom, {stiffness: maxStiffness - index * 10, damping: 22})}}
        >
          {({y}) => <Square image={image} bottom={y} height={height} type={type} index={index} />}
        </Motion>
      );

    case 'placed':
      return <Square image={image} bottom={bottom} height={height} type={type} index={index} />;

    case 'lost':
      return (
        <Motion
          defaultStyle={{scale: 1, opacity: 100}}
          style={{
            scale: spring(100, {stiffness: 200, damping: 32}),
            opacity: spring(0, {stiffness: 30, damping: 12})
          }}
        >
          {({scale, opacity}) => (
            <Square
              image={image}
              bottom={0}
              height={height}
              type={type}
              index={index}
              motionStyle={{
                pointerEvents: 'none',
                opacity: `${opacity / 100}`,
                transform: `scale(${scale / 30})`
              }}
            />
          )}
        </Motion>
      );

    case 'removed':
    default:
      return null;
  }
};

Block.propTypes = {
  type: PropTypes.oneOf(['new', 'lost', 'placed', 'placedAndMoved', 'removed'])
};

const Tower = ({team, blocks, blockSize, maxStiffness}) => (
  <div className={style.tower}>
    {_map((value, index) => {
      const count = countBy(identity, blocks);
      const nbRemoved = (count.removed || 0) + (count.lost || 0);
      const bottom = (index - nbRemoved) * blockSize;

      return (
        <Block
          type={value}
          image={BLOCKS[team]}
          height={`${value === ('removed' || 'lost') ? null : blockSize}px`}
          bottom={bottom}
          index={index}
          key={`block-${team}-${index}`}
          maxStiffness={maxStiffness}
        />
      );
    }, blocks)}
  </div>
);

class Towers extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 0};
    this.initWrapper = this.initWrapper.bind(this);
  }

  componentDidMount() {
    this.deferOpen();
  }

  deferOpen() {
    clearTimeout(this.deferedOpen);

    this.deferedOpen = defer(() => {
      const height = this.element.clientHeight;
      this.setState({height});
    });
  }

  initWrapper(element) {
    this.element = element;
  }

  render() {
    const {goal, towers} = this.props;
    return (
      <div ref={this.initWrapper} className={style.towers}>
        {_map(
          (blocks, index) => (
            <Tower
              key={`tower-${index}`}
              team={index}
              blocks={blocks}
              blockSize={this.state.height / goal}
              maxStiffness={goal * 25}
            />
          ),
          towers
        )}
      </div>
    );
  }
}

const Race = props => {
  const {goal, towers} = props;

  return (
    <div className={style.race}>
      <div className={style.arrival} />
      <Towers towers={towers} goal={goal} />
      <div className={style.start} />
    </div>
  );
};

Race.propTypes = {
  goal: PropTypes.number.isRequired
};

Race.propTypes = {
  goal: PropTypes.number.isRequired
};

export default Race;
