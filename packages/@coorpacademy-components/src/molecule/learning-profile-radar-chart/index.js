import React, {Fragment, useCallback, useEffect, useMemo, useState} from 'react';
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
import {
  find,
  pipe,
  keyBy,
  mapValues,
  size,
  get,
  getOr,
  map,
  toPairs,
  values,
  isEmpty,
  omit,
  fromPairs,
  times,
  flatten
} from 'lodash/fp';
import classnames from 'classnames';
import {isMobile as getIsMobile} from '../../util/check-is-mobile';
import style from './style.css';

const uncappedMap = map.convert({cap: false});

// TICK_POSITIONS
const top = {offset: {x: -100, y: -65}, alignment: 'center', margin: 'auto'};
const bottom = {offset: {x: -100, y: 10}, alignment: 'center', margin: 'auto'};
const right = {offset: {x: 30, y: -10}, alignment: 'start', marginRigth: 'auto'};
const left = {offset: {x: -230, y: -10}, alignment: 'end', marginLeft: 'auto'};

// CONSTANTS
const DEFAULT_COLORS = {
  gradient: {
    fill: ['#0062ffff', '#0062ffff'],
    stroke: ['#0062ffff', '#0062ffff ']
  },
  percentage: {
    color: '#000000ff',
    background: '#ffffff'
  },
  label: {
    color: '#000000ff'
  }
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

const CHART_CONFIGS_BY_SIDE_COUNT = pipe(keyBy('sideCount'), mapValues('name'))(CHART_CONFIGS);

const CUSTOM_DOT_DEFAULT_PROPS = {
  strokeWidth: 4,
  strokeOpacity: 0.2,
  fill: '#fff',
  r: 8,
  pointerEvents: 'all',
  style: {cursor: 'pointer'}
};

const CUSTOM_DOT_ACTIVE_PROPS = {
  fill: '#fff',
  r: 8,
  strokeWidth: 6,
  strokeOpacity: 0.5
};

const RADAR_DEFAULT_PROPS = {
  strokeWidth: 6,
  strokeOpacity: 0.2,
  fillOpacity: 0.2
};

// COMPONENTS
const Gradient = ({type, colors: [firstColor, secondColor]}) => (
  <defs>
    <linearGradient id={`gradient-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={firstColor} />
      <stop offset="100%" stopColor={secondColor} />
    </linearGradient>
  </defs>
);

const CustomDot = ({cx, cy, payload, onDotClick, activeDot, dataKey, stroke}) => {
  const {value: activeDotValue, label: activeDotLabel} = activeDot;
  const label = get('payload.subject', payload);
  const value = get(`payload[${dataKey}]`, payload);
  const isCurrentDotActive = value === activeDotValue && label === activeDotLabel;

  return (
    <circle
      {...{
        ...CUSTOM_DOT_DEFAULT_PROPS,
        ...(isCurrentDotActive && CUSTOM_DOT_ACTIVE_PROPS),
        stroke,
        cx,
        cy,
        onClick: e => {
          e.stopPropagation();
          onDotClick(payload.name);
        }
      }}
    />
  );
};

const CustomTooltip = ({active, payload, label}) => {
  if (active && size(payload))
    return (
      <div className={style.tooltip}>
        <p>{label}</p>
        <p>{payload[0].value}%</p>
      </div>
    );

  return null;
};

const buildRadars = (totalDataset, handleOnDotClick, activeDot) =>
  times(index => {
    const datakey = `value${index + 1}`;
    const dataset = `dataset-${index + 1}`;

    return (
      <Radar
        {...RADAR_DEFAULT_PROPS}
        fill={`url(#gradient-fill-${index})`}
        stroke={`url(#gradient-stroke-${index})`}
        key={dataset}
        name={dataset}
        dataKey={datakey}
        // only on mobile
        // to handle dot style on hover (convert to click)
        // use with the tooltip component
        activeDot={{
          ...CUSTOM_DOT_ACTIVE_PROPS,
          stroke: `url(#gradient-stroke-${index})`
        }}
        dot={
          <CustomDot
            onDotClick={handleOnDotClick(datakey)}
            activeDot={activeDot}
            dataKey={datakey}
            stroke={`url(#gradient-stroke-${index})`}
          />
        }
      />
    );
  }, totalDataset);

const buildCustomLabel = (index, x, y, percentagesValues, name, activeDot, chartType, colors) => {
  const isCurrentDotActive = activeDot.label === name;
  const {
    offset: {x: offsetX, y: offsetY},
    alignment,
    ...rest
  } = CHART_CONFIGS[chartType].ticks[index];

  return (
    <g>
      <foreignObject x={x + offsetX} y={y + offsetY} width="200" height="65">
        <div
          className={classnames(style.tickWrapper, isCurrentDotActive && style.tickWrapperFocus)}
          style={{
            ...rest,
            alignItems: alignment,
            textAlign: alignment,
            opacity: !isEmpty(activeDot) && !isCurrentDotActive ? 0.3 : 1
          }}
        >
          {uncappedMap(
            ({percentage: {color, background}, label: {color: colorLabel}}, i) => (
              <Fragment key={i}>
                <span className={style.tickValue} style={{color, background}}>
                  {percentagesValues[i]}
                </span>
                <span className={style.tickLabel} style={{color: colorLabel}}>
                  {name}
                </span>
              </Fragment>
            ),
            colors
          )}
        </div>
      </foreignObject>
    </g>
  );
};

// UTILS
const formatValues = pipe(
  value => flatten([value]),
  uncappedMap((val, i) => [`value${i + 1}`, val]),
  fromPairs
);

/* this convert incoming component data to rechart data structure */
export const formatData = pipe(
  toPairs,
  map(([label, values_]) => ({subject: label, ...formatValues(values_)}))
);

const LearningProfileRadarChart = (
  {data, totalDataset, colors: colorsProps, onDotClick},
  context
) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState({});

  const formatedData = useMemo(() => formatData(data), [data]);

  const colors = useMemo(
    () =>
      isEmpty(colorsProps)
        ? [DEFAULT_COLORS]
        : map(colorProp => ({...DEFAULT_COLORS, ...colorProp}), colorsProps),
    [colorsProps]
  );

  const chartType = useMemo(
    () => getOr('hexagon', size(data), CHART_CONFIGS_BY_SIDE_COUNT),
    [data]
  );

  const gradients = useMemo(
    () =>
      uncappedMap(
        ({gradient: {fill, stroke}}, index) => (
          <svg key={`gradient-${index}`}>
            <Gradient type={`fill-${index}`} colors={fill} />
            <Gradient type={`stroke-${index}`} colors={stroke} />
          </svg>
        ),
        colors
      ),
    [colors]
  );

  const {useragent} = navigator;
  const isMobile_ = useMemo(() => getIsMobile(useragent), [useragent]);

  const setIsMobile_ = useCallback(() => {
    setIsMobile(isMobile_);
  }, [isMobile_]);

  useEffect(() => {
    setIsMobile_();
    window.addEventListener('resize', setIsMobile_);

    return () => {
      window.removeEventListener('resize', setIsMobile_);
    };
  }, [setIsMobile_]);

  useEffect(() => {
    const handleClick = () => {
      setActiveDot(prevActiveDot => !isEmpty(prevActiveDot) && {});
    };

    !isEmpty(activeDot) && window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [activeDot]);

  function handleOnDotClick(datakey) {
    return label => {
      const payload = find({subject: label}, formatedData);
      setActiveDot({
        key: datakey,
        value: get(datakey, payload),
        label: get('subject', payload)
      });
      onDotClick();
    };
  }

  function renderCustomLabel({x, y, payload, index}) {
    if (isMobile) return;

    const {value: label} = payload;
    const currentData = find({subject: label}, formatedData);
    const percentagesValues = pipe(
      omit('subject'),
      mapValues(value => `${value}%`),
      values
    )(currentData);

    return buildCustomLabel(index, x, y, percentagesValues, label, activeDot, chartType, colors);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatedData}>
        {gradients}
        {buildRadars(totalDataset, handleOnDotClick, activeDot)}
        <PolarGrid strokeDasharray={15} strokeWidth={3} radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={renderCustomLabel} />
        <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
        {isMobile ? <Tooltip cursor={false} content={<CustomTooltip />} /> : null}
      </RadarChart>
    </ResponsiveContainer>
  );
};

LearningProfileRadarChart.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number])
  ).isRequired,
  totalDataset: PropTypes.number.isRequired,
  onDotClick: PropTypes.func,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      gradient: PropTypes.shape({
        fill: PropTypes.arrayOf(PropTypes.string),
        stroke: PropTypes.arrayOf(PropTypes.string)
      }),
      percentage: PropTypes.shape({
        color: PropTypes.string,
        background: PropTypes.string
      }),
      label: PropTypes.shape({
        color: PropTypes.string
      })
    })
  )
};

CustomDot.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  payload: PropTypes.shape({
    payload: PropTypes.shape({
      value: PropTypes.number,
      subject: PropTypes.string
    }),
    name: PropTypes.string
  }),
  onDotClick: PropTypes.func,
  index: PropTypes.number,
  activeDot: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
    key: PropTypes.string
  }),
  dataKey: PropTypes.string,
  stroke: PropTypes.string
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number
    })
  ),
  label: PropTypes.string
};

Gradient.propTypes = {
  type: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default LearningProfileRadarChart;
