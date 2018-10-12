import countBy from 'lodash/fp/countBy';
import defer from 'lodash/fp/defer';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import PropTypes from 'prop-types';
import colors from '../common-fixtures/colors';
import style from './towers.css';

const NORMAL_TOTEMS_WIDTH = 283;
const NORMAL_TOTEMS_HEIGHT = 383;
const NORMAL_TOTEMS_PADDING_PERCENT = 15;

const NORMAL_TOTEMS = [
  'https://user-images.githubusercontent.com/910636/46871482-d958e080-ce31-11e8-9573-43bc5f8fd83e.png'
];

const _map = map.convert({cap: false});

const Square = ({color, type, index, height, bottom, motionStyle, scaleValue = 1}) => {
  const imageHeight = height * 1.2;
  const diffHeights = imageHeight - height;
  const imageWidth = NORMAL_TOTEMS_WIDTH * imageHeight / NORMAL_TOTEMS_HEIGHT;

  return (
    <div
      className={style.block}
      style={{
        height: `${height}px`,
        width: `${imageWidth - imageWidth * NORMAL_TOTEMS_PADDING_PERCENT / 100}px`,
        bottom,
        backgroundColor: scaleValue === 1 ? color : null,
        transform: `scale3d(${scaleValue}, ${scaleValue}, 1)`,
        ...motionStyle
      }}
    >
      <div
        className={style.blockImage}
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          left: `-${imageWidth * NORMAL_TOTEMS_PADDING_PERCENT / 200}px`,
          top: `-${diffHeights / 2}px`,
          backgroundImage: `url('${NORMAL_TOTEMS[0]}')`,
          ...motionStyle
        }}
      />
    </div>
  );
};

const Block = ({color, index, num, type, size, bottom, maxStiffness}) => {
  const height = type === ('removed' || 'lost') ? 0 : size;
  switch (type) {
    case 'good':
      return (
        <Motion
          defaultStyle={{y: 1000}}
          style={{
            y: spring(bottom, {stiffness: 40, damping: 13})
          }}
        >
          {({y}) => (
            <Square color={colors[color]} bottom={y} height={height} type={type} index={index} />
          )}
        </Motion>
      );

    case 'bad':
      return (
        <Motion
          defaultStyle={{scaleValue: 120, opacity: 5000}}
          style={{
            scaleValue: spring(0, {stiffness: 120, damping: 32}),
            opacity: spring(0, {stiffness: 70, damping: 32})
          }}
        >
          {({scaleValue = 0, opacity = 0}) => (
            <Square
              color={colors[color]}
              bottom={bottom}
              height={height}
              type={type}
              index={index}
              motionStyle={{
                pointerEvents: 'none',
                opacity: `${opacity / 100}`,
                transform: `scale(${scaleValue / 100})`
              }}
            />
          )}
        </Motion>
      );

    case 'new':
      return (
        <Motion
          defaultStyle={{y: 1000}}
          style={{y: spring(bottom, {stiffness: maxStiffness - num * 10, damping: 22})}}
        >
          {({y}) => (
            <Square color={colors[color]} bottom={y} height={height} type={type} index={index} />
          )}
        </Motion>
      );

    case 'drop':
      return (
        <Motion
          defaultStyle={{y: bottom + size}}
          style={{y: spring(bottom, {stiffness: maxStiffness - num * 10, damping: 22})}}
        >
          {({y}) => (
            <Square color={colors[color]} bottom={y} height={height} type={type} index={index} />
          )}
        </Motion>
      );

    case 'placed':
      return (
        <Square color={colors[color]} bottom={bottom} height={height} type={type} index={index} />
      );

    case 'lost':
      return (
        <Motion
          defaultStyle={{scaleValue: 120}}
          style={{
            scaleValue: spring(0, {stiffness: 120, damping: 32})
          }}
        >
          {({scaleValue}) => (
            <Square
              color={colors[color]}
              bottom={0}
              height={height}
              type={type}
              index={index}
              motionStyle={{
                pointerEvents: 'none',
                transform: `scale(${scaleValue / 100})`
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
  type: PropTypes.oneOf(['new', 'lost', 'placed', 'removed', 'bad', 'good', 'drop'])
};

const Tower = ({blurType, myTeam, team, goal, blocks, blockSize, maxStiffness}) => {
  const applyBlur = blurType === 'all' || (myTeam.num !== team && blurType === 'all-but-mine');
  const options = {stiffness: 90, damping: 30};

  return (
    <Motion
      defaultStyle={{
        blurValue: 0,
        grayValue: 0
      }}
      style={{
        blurValue: spring(100, options),
        grayValue: spring(100, options)
      }}
    >
      {({blurValue, grayValue}) => {
        return (
          <div
            className={style.tower}
            style={{
              filter: applyBlur
                ? `blur(${3 * blurValue / 100}px) grayscale(${grayValue / 100})`
                : null
            }}
          >
            {_map((value, index) => {
              const count = countBy(identity, blocks);
              const nbRemoved = (count.removed || 0) + (count.lost || 0);
              const num = index - nbRemoved;
              const bottom = num * (blockSize - 1);

              return (
                <Block
                  type={value}
                  color={team}
                  size={blockSize}
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
      }}
    </Motion>
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
    const {goal, towers, blurType, myTeam} = this.props;
    return (
      <div ref={this.initWrapper} className={style.towers}>
        {_map(
          (blocks, index) => (
            <Tower
              key={`tower-${index}`}
              team={index}
              blurType={blurType}
              myTeam={myTeam}
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
  const {myTeam, goal, towers, blurType} = props;

  return <Towers myTeam={myTeam} towers={towers} goal={goal} blurType={blurType} />;
};

Race.propTypes = {
  blurType: PropTypes.oneOf(['all', 'all-but-mine']),
  goal: PropTypes.number.isRequired
};

export default Race;
