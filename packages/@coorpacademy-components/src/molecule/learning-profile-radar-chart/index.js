import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  PolarRadiusAxis
} from 'recharts';
import {find, findIndex, get} from 'lodash/fp';
import classnames from 'classnames';
import style from './style.css';

const Gradient = ({type}) => (
  <defs>
    <linearGradient id={`${type}-gradient`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0062ffff" />
      <stop offset="100%" stopColor={type === 'fill' ? '#8000ff85' : '#8000FF'} />
    </linearGradient>
  </defs>
);

// TICK_POSITIONS
const top = {
  offset: {x: -100, y: -65},
  alignment: 'center',
  margin: 'auto'
};

const bottom = {
  offset: {x: -100, y: 10},
  alignment: 'center',
  margin: 'auto'
};

const right = {
  offset: {x: 30, y: -10},
  alignment: 'start',
  marginRigth: 'auto'
};

const left = {
  offset: {x: -230, y: -10},
  alignment: 'end',
  marginLeft: 'auto'
};

const CHART_TYPES = {
  hexagon: 'hexagon',
  pentagon: 'pentagon',
  quadrilateral: 'quadrilateral',
  triangle: 'triangle'
};

const TICK_CUSTOM_STYLE = {
  [CHART_TYPES.hexagon]: {
    0: top,
    1: right,
    2: right,
    3: bottom,
    4: left,
    5: left
  },
  [CHART_TYPES.pentagon]: {
    0: top,
    1: right,
    2: right,
    3: left,
    4: left
  },
  [CHART_TYPES.quadrilateral]: {
    0: top,
    1: right,
    2: bottom,
    3: left
  },
  [CHART_TYPES.triangle]: {
    0: top,
    1: right,
    2: left
  }
};

const buildCustomTick = (index, x, y, currentValue, label, activeDot, chartType) => {
  const isDotActive = activeDot === index;
  const {
    offset: {x: offsetX, y: offsetY},
    alignment,
    ...rest
  } = get([chartType, index], TICK_CUSTOM_STYLE);

  return (
    <g>
      <foreignObject x={x + offsetX} y={y + offsetY} width="200" height="65">
        <div
          className={classnames(style.tickWrapper, isDotActive && style.tickWrapperFocus)}
          style={{...rest, alignItems: alignment, textAlign: alignment}}
        >
          <span className={style.tickValue}>{currentValue}%</span>
          <span className={style.tickLabel}>{label}</span>
        </div>
      </foreignObject>
    </g>
  );
};

const CustomDot = ({index, cx, cy, payload: {name}, onDotClick, activeDot}) => {
  const defaultDotProps = {
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
    ...defaultDotProps,
    r: 12,
    strokeWidth: 6,
    strokeOpacity: 0.5
  };

  const props = {
    ...defaultDotProps,
    ...(activeDot === index && activeDotProps)
  };

  return <circle {...props} />;
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

  const getChartType = useCallback(() => {
    switch (data.length) {
      case 3:
        return CHART_TYPES.triangle;
      case 4:
        return CHART_TYPES.quadrilateral;
      case 5:
        return CHART_TYPES.pentagon;
      case 6:
        return CHART_TYPES.hexagon;
    }
  }, [data]);
  const chartType = getChartType();

  function renderCustomTick({x, y, payload, index}) {
    if (isMobile) return;

    const {value: label} = payload;
    const {value: currentValue} = find({subject: label}, data);

    return buildCustomTick(index, x, y, currentValue, label, activeDot, chartType);
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
        <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
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
