import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip} from 'recharts';
import {find} from 'lodash/fp';

const buildLabelTick = (index, x, y, currentValue, label) => {
  const defaultProps = {
    x,
    y,
    fontSize: 14,
    fontFamily: 'Gilroy',
    fontWeight: '600'
  };

  switch (index) {
    case 0:
      return (
        <g>
          <rect
            x={x - 22.5}
            y={y - 65}
            width={'45px'}
            height={20}
            fill="url(#gradient)"
            opacity={0.1}
            rx="10"
            ry="10"
          />
          <text {...defaultProps} textAnchor={'middle'} dy={-50}>
            <tspan fill="#0061FF">{currentValue}%</tspan>
            <tspan x={x} dy={25}>
              {label}
            </tspan>
          </text>
        </g>
      );
    case 3:
      return (
        <g>
          <rect
            x={x - 22.5}
            y={y + 8}
            width={45}
            height={24}
            fill="url(#gradient)"
            opacity={0.1}
            rx="10"
            ry="10"
          />
          <text {...defaultProps} textAnchor={'middle'} dy={25}>
            <tspan fill="#0061FF">{currentValue}%</tspan>
            <tspan x={x} dy={25}>
              {label}
            </tspan>
          </text>
        </g>
      );
    case 1:
    case 2:
      return (
        <g>
          <rect
            x={x + 20}
            y={y - 16}
            width={45}
            height={24}
            fill="url(#gradient)"
            opacity={0.1}
            rx="10"
            ry="10"
          />
          <text {...defaultProps} textAnchor={'start'} dx={25}>
            <tspan fill="#0061FF" x={x}>
              {currentValue}%
            </tspan>
            <tspan x={x} dy={25} dx={25}>
              {label}
            </tspan>
          </text>
        </g>
      );
    case 4:
    case 5:
      return (
        <g>
          <rect
            x={x - 67.5}
            y={y - 16}
            width={45}
            height={24}
            fill="url(#gradient)"
            opacity={0.1}
            rx="10"
            ry="10"
          />
          <text {...defaultProps} textAnchor={'end'} dx={-25}>
            <tspan fill="#0061FF">{currentValue}%</tspan>
            <tspan x={x} dy={25} dx={-25}>
              {label}
            </tspan>
          </text>
        </g>
      );
  }
};

const RadarChartExample = ({data, onClick}, context) => {
  const PolarAngleAxisRef = useRef(null);

  function handleHover() {
    // can handle hover event here
    console.log('hover');
    return;
  }

  function handleOnClick() {
    // can handle click event here
    onClick();
    return;
  }

  function renderCustomAxisTick({x, y, payload, index}) {
    const {value: label} = payload;
    const {value: currentValue} = find({subject: label}, data);

    return buildLabelTick(index, x, y, currentValue, label);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0061FF" />
            <stop offset="100%" stopColor="#8000FF" />
          </linearGradient>
        </defs>
        <PolarGrid strokeDasharray="15" strokeWidth={3} radialLines={false} />
        <PolarAngleAxis
          ref={PolarAngleAxisRef}
          dataKey="subject"
          //   onMouseOver={handleHover}
          onClick={handleOnClick}
          tick={renderCustomAxisTick}
        />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="url(#gradient)"
          strokeWidth={3}
          strokeOpacity={0.2}
          fill="url(#gradient)"
          fillOpacity={0.2}
          dot={{r: 4, stroke: 'url(#gradient)', strokeWidth: '4', fill: 'white', fillOpacity: 1}}
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

export default RadarChartExample;
