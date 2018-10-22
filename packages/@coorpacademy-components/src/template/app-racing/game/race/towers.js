import countBy from 'lodash/fp/countBy';
import defer from 'lodash/fp/defer';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import PropTypes from 'prop-types';
import colors from '../common-fixtures/colors';
import style from './towers.css';

const NORMAL_TOTEMS = [
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073735-39b49d00-d1f9-11e8-9f4e-3fdc9bb2c4c4.png',
    colorWidth: 370,
    width: 450,
    height: 660
  },
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073736-39b49d00-d1f9-11e8-845e-7987bf3824a0.png',
    colorWidth: 310,
    width: 508,
    height: 660
  },
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073737-39b49d00-d1f9-11e8-9c93-60de7bb0320d.png',
    colorWidth: 350,
    width: 450,
    height: 660
  },
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073738-3a4d3380-d1f9-11e8-941c-5c6f64053d82.png',
    colorWidth: 325,
    width: 410,
    height: 660
  },
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073739-3a4d3380-d1f9-11e8-9135-9e846cde84b9.png',
    colorWidth: 340,
    width: 446,
    height: 660
  },
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073740-3a4d3380-d1f9-11e8-9e97-aabdd7e1a67b.png',
    colorWidth: 300,
    width: 394,
    height: 660
  }
];

const TOP_TOTEMS = [
  {
    url:
      'https://user-images.githubusercontent.com/13415878/47073743-3ae5ca00-d1f9-11e8-83bf-60ce8b6351cd.png',
    colorWidth: 250,
    width: 1218,
    height: 940
  }
];

const _map = map.convert({cap: false});

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: null
    };
  }

  componentDidMount() {
    this.deferOpen();
  }

  deferOpen() {
    clearTimeout(this.deferedOpen);

    this.deferedOpen = defer(() => {
      const asset = this.props.isLast
        ? TOP_TOTEMS[0]
        : NORMAL_TOTEMS[(this.props.index + this.props.team) % (NORMAL_TOTEMS.length - 1)];
      this.setState({asset});
    });
  }

  render() {
    const {team, height, bottom, motionStyle, scaleValue = 1, isLast = false} = this.props;
    const color = colors[team];

    const asset = this.state.asset;
    if (!asset) {
      return null;
    }

    const imageHeight = height * (isLast ? 1.9 : 1.1);
    const colorWidth = asset.colorWidth * imageHeight / asset.height;
    const imageWidth = asset.width * imageHeight / asset.height;

    const diffHeights = imageHeight - height;
    const diffWidths = imageWidth - colorWidth;

    return (
      <div
        className={style.block}
        style={{
          height: `${height}px`,
          width: `${colorWidth}px`,
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
            left: `-${diffWidths / 2}px`,
            top: `-${diffHeights * (isLast ? 0.8 : 0.5)}px`,
            backgroundImage: `url('${asset.url}')`
          }}
        />
      </div>
    );
  }
}

const Block = ({team, index, num, isLast, type, size, bottom, maxStiffness}) => {
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
            <Square
              team={team}
              bottom={y}
              height={height}
              type={type}
              index={index}
              isLast={isLast}
            />
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
              team={team}
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
          style={{
            y: spring(bottom, {
              stiffness: maxStiffness - num * 10,
              damping: 22
            })
          }}
        >
          {({y}) => (
            <Square
              team={team}
              bottom={y}
              height={height}
              type={type}
              index={index}
              isLast={isLast}
            />
          )}
        </Motion>
      );

    case 'drop':
      return (
        <Motion
          defaultStyle={{y: bottom + size}}
          style={{
            y: spring(bottom, {
              stiffness: maxStiffness - num * 10,
              damping: 22
            })
          }}
        >
          {({y}) => (
            <Square
              team={team}
              bottom={y}
              height={height}
              type={type}
              index={index}
              isLast={isLast}
            />
          )}
        </Motion>
      );

    case 'placed':
      return (
        <Square
          team={team}
          bottom={bottom}
          height={height}
          type={type}
          index={index}
          isLast={isLast}
        />
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
              team={team}
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
        const count = countBy(identity, blocks);
        const nbRemoved = (count.removed || 0) + (count.lost || 0);
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
              const num = index - nbRemoved;
              const bottom = num * (blockSize - 1);
              const isLast = num === goal - 1;

              return (
                <Block
                  type={value}
                  team={team}
                  size={blockSize}
                  bottom={bottom}
                  index={index}
                  num={num}
                  isLast={isLast}
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
