import React from 'react';
import PropTypes from 'prop-types';
import {ResponsiveRadar, GridLabelProps} from '@nivo/radar';

const strokeGradientLayer = ({
  data,
  keys,
  indices,
  centerX,
  centerY,
  angleStep,
  radiusScale,
  colorByKey
}) => {
  const pathCommands = `${data
    .map((datum, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const value = datum[keys[0]];
      const radius = radiusScale(value);
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ')} Z`;

  return <path d={pathCommands} fill="none" stroke="url(#strokeGradient)" strokeWidth={2} />;
};

const LabelComponent = ({id, x, y, anchor}: GridLabelProps) => {
  let anchorOffset = 0;
  if (anchor === 'end') {
    anchorOffset = -60;
  } else if (anchor === 'middle') {
    anchorOffset = -30;
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <g transform={`translate(${anchorOffset}, -20)`}>
        <text
          textAnchor="middle"
          y={-20}
          style={{
            color: 'blue',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: '12px',
            fontWeight: 'bold',
            fill: '#0061FF',
            lineHeight: '16px'
          }}
        >
          +{Math.round(Math.random() * 100)}%
        </text>
        <text
          textAnchor="middle"
          style={{
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 600,
            fill: '#1D1D2B',
            lineHeight: '20px'
          }}
        >
          {id}
        </text>
      </g>
    </g>
  );
};

const CustomRadarChart = ({data, keys, indexBy}) => {
  const fillGradient = {
    id: 'fillGradient',
    type: 'linearGradient',
    colors: [
      {offset: 0, color: '#936BFF', opacity: 0.1},
      {offset: 100, color: '#0061FF'}
    ]
  };

  const strokeGradient = {
    id: 'strokeGradient',
    type: 'linearGradient',
    colors: [
      {offset: 0, color: '#8000FF', opacity: 0.1},
      {offset: 41, color: '#8000FF', opacity: 0.7},
      {offset: 100, color: '#0061FF'}
    ]
  };
  return (
    <div style={{height: '100%', width: '100%'}}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy={indexBy}
        borderWidth={4}
        gridShape="linear"
        maxValue={100}
        valueFormat=">-.2f"
        margin={{top: 70, right: 80, bottom: 40, left: 80}}
        dotSize={12}
        dotColor={{theme: 'background'}}
        dotBorderColor="#8c98f2"
        dotBorderWidth={4}
        motionConfig="wobbly"
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#1D1D2B',
                fontSize: 14,
                fontFamily: 'Gilroy'
              }
            }
          },
          grid: {
            line: {
              stroke: '#E1E1E3',
              strokeWidth: 2,
              strokeDasharray: '16 8'
            }
          }
        }}
        layers={['grid', 'dots', 'layers', 'slices', strokeGradientLayer, 'legends']}
        defs={[fillGradient, strokeGradient]}
        fill={[{match: '*', id: 'fillGradient'}]}
        gridLabel={LabelComponent}
      />
    </div>
  );
};

CustomRadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  indexBy: PropTypes.string.isRequired
  // colorsScheme: PropTypes.string,
  // margin: PropTypes.shape({}),
  // motionConfig: PropTypes.string,
  // legends: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     anchor: PropTypes.string.isRequired,
  //     direction: PropTypes.string.isRequired,
  //     translateX: PropTypes.number,
  //     translateY: PropTypes.number,
  //     itemWidth: PropTypes.number,
  //     itemHeight: PropTypes.number,
  //     itemTextColor: PropTypes.string,
  //     symbolSize: PropTypes.number,
  //     symbolShape: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  //     effects: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         on: PropTypes.string.isRequired,
  //         style: PropTypes.shape({})
  //       })
  //     )
  //   })
  // )
};

export default CustomRadarChart;
