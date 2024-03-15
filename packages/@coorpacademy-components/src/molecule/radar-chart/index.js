import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import {find, findIndex} from 'lodash/fp';

const Gradient = () => (
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0061FF" />
      <stop offset="100%" stopColor="#8000FF" />
    </linearGradient>
  </defs>
);

const OnFocusWrapperStyle = ({x, y}) => (
  <rect x={x} y={y} width={200} height={70} fill="#e8e8e8" opacity={1} rx={10} ry={10} />
);

const CustomDot = ({cx, cy, payload: {name}, onDotClick, index, activeDot}) => {
  const defaultCustomDotProps = {
    cx,
    cy,
    r: 8,
    stroke: 'url(#gradient)',
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

  const isDotActive = activeDot === index;
  return isDotActive ? <circle {...activeDotProps} /> : <circle {...defaultCustomDotProps} />;
};

const buildCustomTickComponent = ({
  valueWrapperProps,
  positionProps,
  textProps,
  tspanProps,
  focusWrapperProps,
  currentValue,
  label,
  textAnchor,
  isDotActive
}) => {
  const defaultTextProps = {
    ...positionProps,
    fontSize: 14,
    fontFamily: 'Gilroy',
    fontWeight: '600'
  };

  const defaultValueWrapperProps = {
    width: 45,
    height: 24,
    fill: 'url(#gradient)',
    opacity: 0.1,
    rx: 10,
    ry: 10
  };

  return (
    <g>
      {isDotActive ? OnFocusWrapperStyle(focusWrapperProps) : null}
      <rect {...defaultValueWrapperProps} {...valueWrapperProps} />
      <text {...defaultTextProps} {...textProps} textAnchor={textAnchor}>
        <tspan fill="#0061FF">{currentValue}%</tspan>
        <tspan {...tspanProps} x={positionProps.x} dy={25}>
          {label}
        </tspan>
      </text>
    </g>
  );
};

const buildCustomTick = (index, x, y, currentValue, label, activeDot) => {
  const isDotActive = activeDot === index;
  const baseProps = {
    positionProps: {x, y},
    currentValue,
    label,
    isDotActive
  };

  switch (index) {
    case 0:
      return buildCustomTickComponent({
        ...baseProps,
        valueWrapperProps: {
          x: x - 22.5,
          y: y - 65
        },
        textProps: {
          dy: -50
        },
        focusWrapperProps: {
          x: x - 100,
          y: y - 75
        },
        textAnchor: 'middle'
      });
    case 3:
      return buildCustomTickComponent({
        ...baseProps,
        valueWrapperProps: {
          x: x - 22.5,
          y: y + 8
        },
        textProps: {
          dy: 25
        },
        focusWrapperProps: {
          x: x - 100,
          y
        },
        textAnchor: 'middle'
      });
    case 1:
    case 2:
      return buildCustomTickComponent({
        ...baseProps,
        valueWrapperProps: {
          x: x + 20,
          y: y - 16
        },
        textProps: {
          dx: 25
        },
        focusWrapperProps: {
          x,
          y: y - 25
        },
        tspanProps: {
          dx: 20
        },
        textAnchor: 'start'
      });
    case 4:
    case 5:
      return buildCustomTickComponent({
        ...baseProps,
        valueWrapperProps: {
          x: x - 67.5,
          y: y - 16
        },
        textProps: {
          dx: -25
        },
        tspanProps: {
          dx: -20
        },
        focusWrapperProps: {
          x: x - 200,
          y: y - 25
        },
        textAnchor: 'end'
      });
  }
};

const RadarChartExample = ({data, onClick}, context) => {
  const [activeDot, setActiveDot] = useState(null);

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
    const {value: label} = payload;
    const {value: current} = find({subject: label}, data);

    return buildCustomTick(index, x, y, current, label, activeDot);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <svg>
          <Gradient />
        </svg>
        <PolarGrid strokeDasharray={15} strokeWidth={3} radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
        <Radar
          name="dataset-1"
          dataKey="value"
          stroke="url(#gradient)"
          strokeWidth={6}
          strokeOpacity={0.2}
          fill="url(#gradient)"
          fillOpacity={0.2}
          dot={<CustomDot onDotClick={handleOnDotClick} activeDot={activeDot} />}
          activeDot={{stroke: '#0061FF', r: 6, strokeWidth: 4, fill: 'white'}}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

RadarChartExample.propTypes = {
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

OnFocusWrapperStyle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

export default RadarChartExample;
