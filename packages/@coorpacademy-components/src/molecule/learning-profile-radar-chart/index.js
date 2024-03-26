import React, {Fragment, useCallback, useEffect, useState} from 'react';
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
  fromPairs
} from 'lodash/fp';
import classnames from 'classnames';
import {isMobile as isMobile_} from '../../util/check-is-mobile';
import style from './style.css';

const Gradient = ({type, colors: [firstColor, secondColor]}) => (
  <defs>
    <linearGradient id={`gradient-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={firstColor} />
      <stop offset="100%" stopColor={secondColor} />
    </linearGradient>
  </defs>
);

const buildSvgGradient = (gradient, index) => {
  const {fill, stroke} = gradient;
  return (
    <svg>
      <Gradient type={`fill-${index}`} colors={fill} />
      <Gradient type={`stroke-${index}`} colors={stroke} />
    </svg>
  );
};

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
  strokeWidth: 4,
  strokeOpacity: 0.2,
  fill: '#fff',
  style: {cursor: 'pointer'},
  r: 8
};

const CUSTOM_DOT_ACTIVE_PROPS = {
  r: 8,
  strokeWidth: 6,
  strokeOpacity: 0.5
};

const RADAR_DEFAULT_PROPS = {
  strokeWidth: 6,
  strokeOpacity: 0.2,
  fillOpacity: 0.2
};

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

const buildRadars = (index, handleOnDotClick, activeDot) => {
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
};

const buildCustomLabel = (index, x, y, percentagesValues, name, activeDot, chartType, styles) => {
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
          {map.convert({cap: false})(({percentage, label}, i) => {
            const {color, background} = percentage;
            const {color: colorLabel} = label;
            return (
              <Fragment key={i}>
                <span className={style.tickValue} style={{color, background}}>
                  {percentagesValues[i]}
                </span>
                <span className={style.tickLabel} style={{color: colorLabel}}>
                  {name}
                </span>
              </Fragment>
            );
          }, styles)}
        </div>
      </foreignObject>
    </g>
  );
};

const formatData = data =>
  pipe(
    toPairs,
    map(([label, values_]) => ({
      subject: label,
      ...fromPairs(map.convert({cap: false})((val, i) => [`value${i + 1}`, val])(values_))
    }))
  )(data);

const LearningProfileRadarChart = ({data, styles, onClick}, context) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState({});

  const formatedData = formatData(data);

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
      setActiveDot({});
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
      onClick();
    };
  }

  const getChartType = useCallback(
    () => pipe(keyBy('sideCount'), mapValues('name'), getOr('hexagon', size(data)))(CHART_CONFIGS),
    [data]
  );
  const chartType = getChartType();

  function renderCustomLabel({x, y, payload, index}) {
    if (isMobile) return;

    const {value: label} = payload;
    const currentData = find({subject: label}, formatedData);
    const percentagesValues = pipe(
      omit('subject'),
      mapValues(value => `${value}%`),
      values
    )(currentData);

    return buildCustomLabel(index, x, y, percentagesValues, label, activeDot, chartType, styles);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatedData}>
        {map.convert({cap: false})(
          ({gradient}, i) => (
            <Fragment key={i}>
              {buildSvgGradient(gradient, i)}
              {buildRadars(i, handleOnDotClick, activeDot)}
            </Fragment>
          ),
          styles
        )}
        <PolarGrid strokeDasharray={15} strokeWidth={3} radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={renderCustomLabel} />
        <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
        {isMobile ? <Tooltip cursor={false} /> : null}
      </RadarChart>
    </ResponsiveContainer>
  );
};

LearningProfileRadarChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.arrayOf(
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

Gradient.propTypes = {
  type: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string)
};

export default LearningProfileRadarChart;
