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
import {find, findIndex, pipe, keyBy, mapValues, size, getOr} from 'lodash/fp';
import classnames from 'classnames';
import {isMobile as isMobile_} from '../../util/check-is-mobile';
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

const CHART_CONFIGS = {
  triangle: {
    name: 'triangle',
    ticks: [top, right, left],
    sideCount: 3
  },
  quadrilateral: {
    name: 'quadrilateral',
    ticks: [top, right, bottom, left],
    sideCount: 4
  },
  pentagon: {
    name: 'pentagon',
    ticks: [top, right, right, left, left],
    sideCount: 5
  },
  hexagon: {
    name: 'hexagon',
    ticks: [top, right, right, bottom, left, left],
    sideCount: 6
  }
};

const CUSTOM_DOT_DEFAULT_PROPS = {
  stroke: 'url(#stroke-gradient)',
  strokeWidth: 4,
  strokeOpacity: 0.2,
  fill: 'white',
  style: {cursor: 'pointer'},
  r: 8
};

const CUSTOM_DOT_ACTIVE_PROPS = {
  r: 12,
  strokeWidth: 6,
  strokeOpacity: 0.5
};

const CustomDot = ({index, cx, cy, payload: {name}, onDotClick, activeDot}) => (
  <circle
    {...{
      ...CUSTOM_DOT_DEFAULT_PROPS,
      ...(activeDot === index && CUSTOM_DOT_ACTIVE_PROPS),
      cx,
      cy,
      onClick: () => onDotClick(name)
    }}
  />
);

const buildCustomLabel = (index, x, y, currentValue, label, activeDot, chartType) => {
  const isDotActive = activeDot === index;
  const {
    offset: {x: offsetX, y: offsetY},
    alignment,
    ...rest
  } = CHART_CONFIGS[chartType].ticks[index];

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

const LearningProfileRadarChart = ({data, onClick}, context) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState(null);

  const getIsMobile = useCallback(() => {
    setIsMobile(isMobile_());
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
    onClick();
  }

  const getChartType = useCallback(
    () => pipe(keyBy('sideCount'), mapValues('name'), getOr('hexagon', size(data)))(CHART_CONFIGS),
    [data]
  );
  const chartType = getChartType();

  function renderCustomLabel({x, y, payload, index}) {
    if (isMobile) return;

    const {value: label} = payload;
    const {value: currentValue} = find({subject: label}, data);

    return buildCustomLabel(index, x, y, currentValue, label, activeDot, chartType);
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
        <PolarAngleAxis dataKey="subject" tick={renderCustomLabel} />
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
