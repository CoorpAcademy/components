import countBy from 'lodash/fp/countBy';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import style from './race.css';

const _map = map.convert({cap: false});
const BLOCKS = [
  'https://user-images.githubusercontent.com/910636/41063327-a380f744-69d8-11e8-85da-a6f6f3d81a17.png',
  'https://user-images.githubusercontent.com/910636/41063878-3c07c3ac-69da-11e8-967e-bf62657d57b3.png',
  'https://user-images.githubusercontent.com/910636/41063879-3c37737c-69da-11e8-8f89-c5ecd5de9534.png',
  'https://user-images.githubusercontent.com/910636/41063880-3c680cf8-69da-11e8-9d96-3bb6701ef9cf.png',
  'https://user-images.githubusercontent.com/910636/41063881-3c957008-69da-11e8-83e4-374509a9c5ed.png'
];

const Block = ({image, index, type, height, bottom}) => (
  <div
    className={classnames([style.block, style[type], type === 'new' && style.shake])}
    style={{
      height,
      bottom,
      backgroundImage: `url(${image}`,
      animationDuration: `${2000 + index * 200}ms`
    }}
  >
    {type}
  </div>
);

Block.propTypes = {
  type: PropTypes.oneOf(['new', 'placed', 'removed'])
};

const Tower = ({team, blocks, blockSize}) => (
  <div className={style.tower}>
    {_map(
      (value, index) => (
        <Block
          type={value}
          image={BLOCKS[team]}
          height={`${value === 'removed' ? null : blockSize}%`}
          bottom={`${(index - (countBy(identity, blocks).removed || 0)) * blockSize}%`}
          index={index}
          key={`block-${team}-${index}`}
        />
      ),
      blocks
    )}
  </div>
);

const Towers = ({teams, goal}) => (
  <div className={style.towers}>
    {_map(
      (blocks, index) => (
        <Tower key={`tower-${index}`} team={index} blocks={blocks} blockSize={100 / goal} />
      ),
      teams
    )}
  </div>
);

const Race = props => {
  const {goal, teams} = props;

  return (
    <div className={style.race}>
      <div className={style.arrival}>Arrival: {goal}</div>
      <Towers teams={teams} goal={goal} />
      <div className={style.start}>Start</div>
    </div>
  );
};

Race.propTypes = {
  goal: PropTypes.number.isRequired
};

export default Race;
