import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip} from 'recharts';
import {find, findIndex, get} from 'lodash/fp';
import classnames from 'classnames';
import style from './style.css';

const customTickStyle = {
  hexagon: {
    top: {
      offset: {x: -100, y: -65},
      alignItems: 'center',
      margin: 'auto'
    },
    bottom: {
      offset: {x: -100, y: 10},
      alignItems: 'center',
      margin: 'auto'
    },
    right: {
      offset: {x: 30, y: -10},
      alignItems: 'start',
      marginRigth: 'auto'
    },
    left: {
      offset: {x: -230, y: -10},
      alignItems: 'end',
      marginLeft: 'auto'
    }
  }
  // pentagon: {},
  // quadrilateral: {},
  // triangle: {}
};

const Gradient = ({type}) => (
  <defs>
    <linearGradient id={`${type}-gradient`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0062ffff" />
      <stop offset="100%" stopColor={type === 'fill' ? '#8000ff85' : '#8000FF'} />
    </linearGradient>
  </defs>
);

const CustomDot = ({cx, cy, payload: {name}, onDotClick, index, activeDot}) => {
  const defaultCustomDotProps = {
    cx,
    cy,
    r: 8,
    stroke: 'url(#stroke-gradient)',
    strokeWidth: 4,
    strokeOpacity: 0.2,
    fill: 'white',
    onClick: () => onDotClick(name),
    style: {cursor: 'pointer'}
  };

  const activeDotProps = {
    ...defaultCustomDotProps,
    r: 12,
    strokeWidth: 6,
    strokeOpacity: 0.5
  };

  const props = {
    ...defaultCustomDotProps,
    ...(activeDot === index && activeDotProps)
  };

  return <circle {...props} />;
};

const getPosition = index => {
  switch (index) {
    case 0:
      return 'top';
    case 3:
      return 'bottom';
    case 1:
    case 2:
      return 'right';
    case 4:
    case 5:
      return 'left';
  }
};

const getCustomProps = (index, x, y) => {
  // if type === hexagon

  const position = getPosition(index);
  const {offset, ...rest} = get(`hexagon.${position}`, customTickStyle);

  return {
    ...rest,
    x: x + offset.x,
    y: y + offset.y
  };
};

const buildCustomTick = (index, currentX, currentY, currentValue, label, activeDot) => {
  const isDotActive = activeDot === index;
  const {x, y, ...rest} = getCustomProps(index, currentX, currentY);

  return (
    <g>
      <foreignObject x={x} y={y} width="200" height="65">
        <div
          className={classnames(style.tickWrapper, isDotActive && style.tickeWrapperFocus)}
          style={{...rest}}
        >
          <span className={style.tickValue}>{currentValue}%</span>
          <span>{label}</span>
        </div>
      </foreignObject>
    </g>
  );
};

const LearningProfileRadarChart = ({data, onClick}, context) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState(null);

  const getIsMobile = useCallback(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile_ = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
    setIsMobile(isMobile_);
  }, []);

  useEffect(() => {
    getIsMobile();
    window.addEventListener('resize', getIsMobile);

    return () => {
      window.removeEventListener('resize', getIsMobile);
    };
  }, [getIsMobile]);

  useEffect(() => {
    const handleClick = () => {
      setActiveDot(null);
    };

    activeDot !== null && window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [activeDot]);

  function handleOnDotClick(label) {
    const index = findIndex({subject: label}, data);
    setActiveDot(index);
  }

  function renderCustomTick({x, y, payload, index}) {
    if (isMobile) return;

    const {value: label} = payload;
    const {value: current} = find({subject: label}, data);

    return buildCustomTick(index, x, y, current, label, activeDot);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <svg>
          <Gradient type="fill" />
          <Gradient type="stroke" />
        </svg>
        {/* possible to pass gridType="circle" */}
        <PolarGrid strokeDasharray={15} strokeWidth={3} radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
        <Radar
          name="dataset-1"
          dataKey="value"
          stroke="url(#stroke-gradient)"
          strokeWidth={6}
          strokeOpacity={0.2}
          fill="url(#fill-gradient)"
          fillOpacity={0.2}
          dot={<CustomDot onDotClick={handleOnDotClick} activeDot={activeDot} />}
          activeDot={{stroke: '#0061FF', r: 6, strokeWidth: 4, fill: 'white'}}
        />
        {isMobile ? <Tooltip cursor={false} /> : null}
      </RadarChart>
    </ResponsiveContainer>
  );
};

LearningProfileRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string,
      value: PropTypes.number,
      fullMark: PropTypes.number
    })
  ),
  onClick: PropTypes.func
};

CustomDot.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  payload: PropTypes.shape({
    name: PropTypes.string
  }),
  onDotClick: PropTypes.func,
  index: PropTypes.number,
  activeDot: PropTypes.number
};

Gradient.propTypes = {
  type: PropTypes.string
};

export default LearningProfileRadarChart;
