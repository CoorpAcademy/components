import countBy from 'lodash/fp/countBy';
import defer from 'lodash/fp/defer';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import PropTypes from 'prop-types';
import BLOCKS from '../common-fixtures/blocks';
import style from './towers.css';

const _map = map.convert({cap: false});

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

const Block = ({image, index, num, type, height, bottom, maxStiffness}) => {
  switch (type) {
    case 'new':
      return (
        <Motion
          defaultStyle={{y: 1000}}
          style={{y: spring(bottom, {stiffness: maxStiffness - num * 10, damping: 22})}}
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

const Tower = ({team, goal, blocks, blockSize, maxStiffness}) => {
  return (
    <div className={style.tower}>
      {_map((value, index) => {
        const count = countBy(identity, blocks);
        const nbRemoved = (count.removed || 0) + (count.lost || 0);
        const num = index - nbRemoved;
        const bottom = num * blockSize;

        return (
          <Block
            type={value}
            image={BLOCKS[team]}
            height={`${value === ('removed' || 'lost') ? null : blockSize}px`}
            bottom={bottom}
            index={index}
            num={num}
            key={`block-${team}-${index}`}
            maxStiffness={maxStiffness}
          />
        );
      }, blocks)}
    </div>
  );
};

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
              goal={goal}
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
