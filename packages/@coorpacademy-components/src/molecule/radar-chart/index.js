import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip} from 'recharts';
import {find, findIndex} from 'lodash/fp';
import classnames from 'classnames';
import style from './style.css';

const Gradient = () => (
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0061FF" />
      <stop offset="100%" stopColor="#8000FF" />
    </linearGradient>
  </defs>
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

const buildCustomTick = (index, x, y, currentValue, label, activeDot) => {
  const isDotActive = activeDot === index;

  const children = ({customStyle}) => (
    <div
      className={classnames(style.tickWrapper, isDotActive && style.ticketWrapperFocus)}
      style={{...customStyle}}
    >
      <span className={style.tickValue}>{currentValue}%</span>
      <span>{label}</span>
    </div>
  );

  switch (index) {
    case 0:
      return (
        <g>
          <foreignObject x={x - 100} y={y - 65} width="200" height="65">
            {children({customStyle: {alignItems: 'center', margin: 'auto'}})}
          </foreignObject>
        </g>
      );
    case 3:
      return (
        <g>
          <foreignObject x={x - 100} y={y + 10} width="200" height="65">
            {children({customStyle: {alignItems: 'center', margin: 'auto'}})}
          </foreignObject>
        </g>
      );
    case 1:
    case 2:
      return (
        <g>
          <foreignObject x={x + 30} y={y - 10} width="200" height="65">
            {children({customStyle: {alignItems: 'start', marginRigth: 'auto'}})}
          </foreignObject>
        </g>
      );
    case 4:
    case 5:
      return (
        <g>
          <foreignObject x={x - 230} y={y - 10} width="200" height="65">
            {children({customStyle: {alignItems: 'end', marginLeft: 'auto'}})}
          </foreignObject>
        </g>
      );
  }
};

const RadarChartExample = ({data, onClick}, context) => {
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
        {isMobile ? <Tooltip cursor={false} /> : null}
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

export default RadarChartExample;
