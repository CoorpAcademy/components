import React, {Fragment, useCallback, useEffect, useMemo, useState} from 'react';
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
  pipe,
  keyBy,
  mapValues,
  size,
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
import {
  ActiveDotType,
  ColorType,
  FormatedColorsType,
  FormatedDataType,
  LearningProfileRadarChartPropTypes,
  TickType,
  learningProfileRadarChartPropTypes
} from './types';

// TICK_POSITIONS
const top: TickType = {offset: {x: -100, y: -65}, alignment: 'center', margin: 'auto'};
const bottom: TickType = {offset: {x: -100, y: 10}, alignment: 'center', margin: 'auto'};
const right: TickType = {offset: {x: 30, y: -10}, alignment: 'start', marginRight: 'auto'};
const left: TickType = {offset: {x: -230, y: -10}, alignment: 'end', marginLeft: 'auto'};

// CONSTANTS
const DEFAULT_COLORS: FormatedColorsType = {
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
} as const;

const CUSTOM_DOT_DEFAULT_PROPS = {
  strokeWidth: 4,
  strokeOpacity: 0.2,
  fill: '#fff',
  r: 8,
  pointerEvents: 'all',
  style: {cursor: 'pointer'}
} as const;

const CUSTOM_DOT_ACTIVE_PROPS = {
  fill: '#fff',
  r: 8,
  strokeWidth: 6,
  strokeOpacity: 0.5
} as const;

const RADAR_DEFAULT_PROPS = {
  strokeWidth: 6,
  strokeOpacity: 0.2,
  fillOpacity: 0.2
} as const;

const CHART_CONFIGS_BY_SIDE_COUNT = pipe(keyBy('sideCount'), mapValues('name'));

// COMPONENTS
const Gradient = ({type, colors: [firstColor, secondColor]}: {type: string; colors: string[]}) => (
  <defs>
    <linearGradient id={`gradient-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor={firstColor} />
      <stop offset="100%" stopColor={secondColor} />
    </linearGradient>
  </defs>
);

const CustomTooltip = ({
  active,
  payload,
  label
}: {
  active?: boolean;
  payload?: {value: number}[];
  label?: string;
}) => {
  if (active && payload && payload.length > 0)
    return (
      <div className={style.tooltip}>
        <p>{label}</p>
        <p>{payload[0].value}%</p>
      </div>
    );

  return null;
};

const CustomDot = ({
  cx,
  cy,
  payload,
  onDotClick,
  dataKey,
  stroke,
  activeDot
}: {
  cx?: number;
  cy?: number;
  payload?: {payload: {subject: string} & {[datakey: string]: number}; name: string};
  onDotClick: (name: string) => void;
  dataKey: string;
  stroke: string;
  activeDot?: ActiveDotType;
}) => {
  const activeDotValue = activeDot?.value;
  const activeDotLabel = activeDot?.label;
  const label = payload?.payload.subject;
  const value = payload?.payload[dataKey];
  // maybe remove value comparison ???
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

          if (!payload?.name) return;
          onDotClick(payload.name);
        }
      }}
    />
  );
};

const buildRadars = (
  totalDataset: number,
  handleOnDotClick: (datakey: string) => (name: string) => void,
  activeDot?: ActiveDotType
) =>
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

const buildCustomLabel = ({
  index,
  x,
  y,
  percentagesValues,
  label,
  activeDot,
  chartType,
  formatedColors
}: {
  index: number;
  x: number;
  y: number;
  percentagesValues: number[];
  label: string;
  chartType: keyof typeof CHART_CONFIGS;
  formatedColors: FormatedColorsType[];
  activeDot?: ActiveDotType;
}) => {
  const isCurrentDotActive = activeDot?.label === label;
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
          {formatedColors.map(
            ({percentage: {color, background}, label: {color: colorLabel}}, i) => (
              <Fragment key={i}>
                <span className={style.tickValue} style={{color, background}}>
                  {percentagesValues[i]}
                </span>
                <span className={style.tickLabel} style={{color: colorLabel}}>
                  {label}
                </span>
              </Fragment>
            )
          )}
        </div>
      </foreignObject>
    </g>
  );
};

// UTILS
const formatValues_: (values_: number | number[]) => Record<string, number> = pipe(
  values_ => flatten([values_]),
  values_ => values_.map((val: number, i: number): [string, number] => [`value${i + 1}`, val]),
  fromPairs
);

/* this convert incoming component data to rechart data structure */
export const formatData: (data_: LearningProfileRadarChartPropTypes['data']) => FormatedDataType[] =
  pipe(
    toPairs,
    map(([label, values_]: [string, number | number[]]) => ({
      ...formatValues_(values_),
      subject: label
    }))
  );

const LearningProfileRadarChart = ({
  data,
  totalDataset,
  colors: colorsProps,
  onClick
}: LearningProfileRadarChartPropTypes) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState<ActiveDotType>();

  const formatedData = useMemo(() => formatData(data), [data]);

  const formatedColors: FormatedColorsType[] = times(i => {
    const hasColorsProps = !!colorsProps?.length;
    if (!hasColorsProps) return DEFAULT_COLORS;

    const colors: ColorType | undefined = colorsProps[i];
    return colors ? Object.assign({}, DEFAULT_COLORS, colors) : DEFAULT_COLORS;
  })(totalDataset);

  const chartType: keyof typeof CHART_CONFIGS = useMemo(
    () => getOr('hexagon', size(data), CHART_CONFIGS_BY_SIDE_COUNT(CHART_CONFIGS)),
    [data]
  );

  const gradients = useMemo(
    () =>
      formatedColors.map(({gradient: {fill, stroke}}, index) => (
        <svg key={`gradient-${index}`}>
          <Gradient type={`fill-${index}`} colors={fill} />
          <Gradient type={`stroke-${index}`} colors={stroke} />
        </svg>
      )),
    [formatedColors]
  );

  const {userAgent} = navigator;
  const isMobile_ = useMemo(() => getIsMobile(userAgent), [userAgent]);

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
      setActiveDot(prevActiveDot => {
        if (!isEmpty(prevActiveDot)) return undefined;
      });
    };

    !isEmpty(activeDot) && window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [activeDot]);

  function handleOnDotClick(datakey: string) {
    return (label: string) => {
      const payload = formatedData.find(data_ => data_.subject === label);
      if (!payload) return;

      setActiveDot({
        key: datakey,
        value: payload[datakey],
        label: payload.subject
      });
      onClick();
    };
  }

  function renderCustomLabel({
    x,
    y,
    payload,
    index
  }: {
    x: number;
    y: number;
    payload: {value: string};
    index: number;
  }) {
    const {value: label} = payload;
    const currentData = formatedData.find(({subject}) => subject === label);
    const percentagesValues: number[] = pipe(
      omit('subject'),
      mapValues(value => `${value}%`),
      values
    )(currentData);

    return buildCustomLabel({
      index,
      x,
      y,
      percentagesValues,
      label,
      activeDot,
      chartType,
      formatedColors
    });
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formatedData}>
        {gradients}
        {buildRadars(totalDataset, handleOnDotClick, activeDot)}
        <PolarGrid strokeDasharray={15} strokeWidth={3} radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={!isMobile && renderCustomLabel} />
        <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
        {isMobile ? <Tooltip cursor={false} content={<CustomTooltip />} /> : null}
      </RadarChart>
    </ResponsiveContainer>
  );
};

LearningProfileRadarChart.prototype = learningProfileRadarChartPropTypes;

export default LearningProfileRadarChart;
