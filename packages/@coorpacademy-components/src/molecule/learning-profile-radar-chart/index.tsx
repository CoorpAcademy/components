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
  flatten,
  findKey,
  get
} from 'lodash/fp';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {isMobile as getIsMobile} from '../../util/check-is-mobile';
import ButtonLink from '../../atom/button-link';
import {ButtonLinkProps} from '../../atom/button-link/types';
import Provider, {GetSkinFromContext, GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import {
  ActiveDotType,
  FormatedColorsType,
  FormatedDataType,
  LearningProfileRadarChartPropTypes,
  TickType,
  learningProfileRadarChartPropTypes
} from './types';
import style from './style.css';

type CHART_TYPE_TYPE = keyof typeof CHART_CONFIGS;

/* TICK_POSITIONS */
const top: TickType = {offset: {x: -100, y: -75}, alignment: 'center', margin: 'auto'};
const bottom: TickType = {offset: {x: -100, y: 10}, alignment: 'center', margin: 'auto'};
const right: TickType = {offset: {x: 30, y: -10}, alignment: 'start', marginRight: 'auto'};
const left: TickType = {offset: {x: -230, y: -10}, alignment: 'end', marginLeft: 'auto'};

/* CONSTANTS */
const BLACK = '#000000ff';
const WHITE = '#ffffffff';
const DEFAULT_MAIN_COLOR = '#0062ffff';

const DEFAULT_COLORS: FormatedColorsType = {
  gradient: {
    fill: [DEFAULT_MAIN_COLOR, DEFAULT_MAIN_COLOR],
    stroke: [DEFAULT_MAIN_COLOR, DEFAULT_MAIN_COLOR]
  },
  percentage: {
    color: BLACK,
    background: WHITE
  },
  label: {
    color: BLACK
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

const DOT_DEFAULT_PROPS = {
  strokeWidth: 2,
  strokeOpacity: 0.4,
  fill: '#fff',
  r: 4,
  pointerEvents: 'all',
  style: {cursor: 'pointer'}
} as const;

const DOT_ACTIVE_PROPS = {
  fill: '#fff',
  r: 6,
  strokeWidth: 4,
  strokeOpacity: 0.6
} as const;

const RADAR_DEFAULT_PROPS = {
  strokeWidth: 3,
  strokeOpacity: 0.2,
  fillOpacity: 0.2
} as const;

/* COMPONENTS */
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
}) =>
  active && !!payload?.length ? (
    <div className={style.tooltip}>
      <span className={style.tooltipLabel}>{label}</span>
      <span className={style.tooltipValue}>{payload[0].value}%</span>
    </div>
  ) : null;

const CustomDot = ({
  cx,
  cy,
  payload,
  onDotHover,
  onDotClick,
  stroke,
  activeDot,
  dataName
}: {
  cx?: number;
  cy?: number;
  payload?: {payload: {subject: string} & {[datakey: string]: number}; name: string};
  onDotHover: (name: string) => void;
  onDotClick: (name: string) => void;
  dataKey: string;
  stroke: string;
  activeDot?: ActiveDotType;
  dataName: string;
}) => (
  <circle
    {...{
      ...DOT_DEFAULT_PROPS,
      ...(payload?.payload.subject === activeDot?.label && DOT_ACTIVE_PROPS),
      stroke,
      cx,
      cy,
      onTouchStart: () => {
        if (!payload?.name) return;
        onDotClick(payload.name);
      },
      onClick: e => {
        e.stopPropagation();

        if (!payload?.name) return;
        onDotClick(payload.name);
      },
      onMouseOver: () => {
        if (!payload?.name) return;
        onDotHover(payload.name);
      },
      onMouseLeave: () => onDotHover(''),
      'data-name': dataName
    }}
  />
);

const buildRadars = (
  totalDataset: number,
  handleDotHover: (name: string) => void,
  handleOnDotClick: (name: string) => void,
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
        activeDot={{
          ...DOT_ACTIVE_PROPS,
          stroke: `url(#gradient-stroke-${index})`
        }}
        // only on mobile
        // to handle dot style on hover (convert to click)
        // use with the tooltip component
        dot={
          <CustomDot
            onDotHover={handleDotHover}
            onDotClick={handleOnDotClick}
            activeDot={activeDot}
            dataKey={datakey}
            stroke={`url(#gradient-stroke-${index})`}
            dataName={`dot-${dataset}`}
          />
        }
      />
    );
  }, totalDataset);

const CustomLabel = ({
  index,
  x,
  y,
  percentagesValues,
  label,
  activeDot,
  chartType,
  formatedColors,
  primarySkinColor,
  exploreLocale,
  hoveredDot,
  onClick,
  onExploreClick
}: {
  index: number;
  x: number;
  y: number;
  percentagesValues: number[];
  label: string;
  chartType: CHART_TYPE_TYPE;
  formatedColors: FormatedColorsType[];
  activeDot?: ActiveDotType;
  primarySkinColor: string;
  exploreLocale: string;
  hoveredDot: string;
  onClick: (name: string) => void;
  onExploreClick: (name: string) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const isCurrentDotActive = activeDot?.label === label;
  const {
    offset: {x: offsetX, y: offsetY},
    alignment,
    ...rest
  } = CHART_CONFIGS[chartType].ticks[index];

  function onLabelClick(e: React.MouseEvent) {
    e.stopPropagation();
    onClick(label);
  }

  function handleExploreClick() {
    onExploreClick(label);
  }

  const buttonExploreProps: ButtonLinkProps = {
    customStyle: {
      height: '36px',
      backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
      color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onClick: handleExploreClick,
    'aria-label': `${label}, ${exploreLocale}`,
    label: exploreLocale,
    'data-name': 'learner-skill-card-explore-button',
    icon: {
      position: 'left',
      faIcon: {
        name: 'compass',
        backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
        color: hovered ? '#FFFFFF' : primarySkinColor,
        size: 16
      }
    }
  };

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const extraOffsetY = isCurrentDotActive && index === 0 ? -25 : 0;

  return (
    <g>
      <foreignObject
        className={style.tickeForeignObject}
        x={x + offsetX}
        y={y + offsetY + extraOffsetY}
        width="200"
        height="65"
      >
        <div
          data-name={label}
          onClick={onLabelClick}
          className={classnames(
            style.tickWrapper,
            isCurrentDotActive && style.tickWrapperFocus,
            hoveredDot === label && style.tickWrapperHover
          )}
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
          {isCurrentDotActive ? (
            <div
              className={style.buttonWrapper}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              data-name="button-explore-wrapper"
            >
              <ButtonLink {...buttonExploreProps} />
            </div>
          ) : null}
        </div>
      </foreignObject>
    </g>
  );
};

/* UTILS */
const CHART_CONFIGS_BY_SIDE_COUNT = pipe(keyBy('sideCount'), mapValues('name'))(CHART_CONFIGS);

const formatValues: (values_: number | number[]) => Record<string, number> = pipe(
  values_ => flatten([values_]),
  values_ => values_.map((val: number, i: number): [string, number] => [`value${i + 1}`, val]),
  fromPairs
);

/* this convert incoming component data to rechart data structure */
export const formatData: (
  legend: {[ref: string]: string},
  data_: LearningProfileRadarChartPropTypes['data']
) => FormatedDataType[] = (legend, data_) =>
  pipe(
    toPairs,
    map(([ref, values_]: [string, number | number[]]) => ({
      ...formatValues(values_),
      subject: legend[ref]
    }))
  )(data_);

export const LearningProfileRadarChart = (
  {
    data,
    legend,
    totalDataset,
    colors: colorsProps,
    onClick,
    onExploreClick,
    width,
    height,
    margin
  }: LearningProfileRadarChartPropTypes,
  legacyContext: WebContextValues
) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDot, setActiveDot] = useState<ActiveDotType>();
  const [hoveredDot, setHoveredDot] = useState('');
  const skin = GetSkinFromContext(legacyContext);
  const translate = GetTranslateFromContext(legacyContext);
  const primarySkinColor = get('common.primary', skin);
  console.log(data)

  const formatedColors = times(i => {
    if (!colorsProps?.length) return DEFAULT_COLORS;

    const colors = colorsProps[i];
    return colors ? Object.assign({}, DEFAULT_COLORS, colors) : DEFAULT_COLORS;
  })(totalDataset);

  const chartType: CHART_TYPE_TYPE = useMemo(
    () => getOr('hexagon', size(data), CHART_CONFIGS_BY_SIDE_COUNT),
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

  const userAgent = navigator?.userAgent;
  const isMobile_ = useMemo(() => getIsMobile(userAgent), [userAgent]);

  const setIsMobile_ = useCallback(() => {
    setIsMobile(isMobile_);
  }, [isMobile_]);

  useEffect(() => setIsMobile_(), [setIsMobile_]);

  useEffect(() => {
    const handleClick = () => {
      setActiveDot(undefined);
      onClick(undefined);
    };

    !isEmpty(activeDot) && window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [activeDot, onClick, setActiveDot]);

  function handleOnActiveDotClick() {
    setActiveDot(undefined);
    onClick(undefined);
  }

  function handleOnDotClick(label: string) {
    if (!isEmpty(activeDot) && activeDot?.label === label) {
      handleOnActiveDotClick();
      return;
    }
    const payload = formatedData.find(({subject}) => subject === label);
    if (!payload) return;

    const index = formatedData.indexOf(payload);
    const datakey = `value${index + 1}`;
    const skillRef = findKey(val => val === payload?.subject, legend);

    if (skillRef) {
      setActiveDot({
        key: datakey,
        value: payload[datakey],
        label: payload.subject
      });
      onClick(skillRef);
    }
  }

  function handleExploreClick(label: string) {
    const payload = formatedData.find(({subject}) => subject === label);
    if (!payload) return;

    const skillRef = findKey(val => val === payload?.subject, legend);

    if (skillRef) {
      onExploreClick(skillRef);
    }
  }

  function renderCustomLabel(props: {
    x: number;
    y: number;
    payload: {value: string};
    index: number;
  }) {
    const {
      x,
      y,
      payload: {value: label},
      index
    } = props;
    const currentData = formatedData.find(({subject}) => subject === label);
    const percentagesValues: number[] = pipe(
      omit('subject'),
      mapValues(value => `${value}%`),
      values
    )(currentData);

    return (
      <CustomLabel
        index={index}
        x={x}
        y={y}
        percentagesValues={percentagesValues}
        label={label}
        activeDot={activeDot}
        chartType={chartType}
        formatedColors={formatedColors}
        primarySkinColor={primarySkinColor}
        exploreLocale={translate('Explore')}
        hoveredDot={hoveredDot}
        onClick={handleOnDotClick}
        onExploreClick={handleExploreClick}
      />
    );
  }
  const formatedData = useMemo(() => formatData(legend, data), [legend, data]);

  return (
    <RadarChart
      width={width}
      height={height}
      margin={margin ?? (isMobile ? {top: 80} : {top: 180})}
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={formatedData}
    >
      {gradients}
      <PolarGrid strokeDasharray={10} strokeWidth={2} radialLines={false} />
      <PolarAngleAxis dataKey="subject" tick={!isMobile && renderCustomLabel} />
      <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
      {buildRadars(totalDataset, setHoveredDot, handleOnDotClick, activeDot)}
      {isMobile ? <Tooltip cursor={false} content={<CustomTooltip />} /> : null}
    </RadarChart>
  );
};

const ResponsiveLearningProfileRadarChart = (props: LearningProfileRadarChartPropTypes) => (
  <ResponsiveContainer width="100%" height="100%">
    <LearningProfileRadarChart {...props} />
  </ResponsiveContainer>
);

LearningProfileRadarChart.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

LearningProfileRadarChart.propTypes = learningProfileRadarChartPropTypes;
ResponsiveLearningProfileRadarChart.propTypes = learningProfileRadarChartPropTypes;

export default ResponsiveLearningProfileRadarChart;
