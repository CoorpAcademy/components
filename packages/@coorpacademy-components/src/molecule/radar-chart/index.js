/* eslint-disable react/prop-types */
import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {ResponsiveRadar, GridLabelProps} from '@nivo/radar';

const findProfile1ValueById = (id, data) => {
  const entry = data.find(d => d.competency === id);
  return entry ? entry.profile_1_value : null;
};

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

  return <path d={pathCommands} fill="none" stroke="url(#strokeGradient)" strokeWidth={6} />;
};

const createCustomDotLayer = (onClickDot, selectedLabelId) => {
  // eslint-disable-next-line react/display-name, react/prop-types
  return ({centerX, centerY, radiusScale, angleStep, data, keys}) => {
    return (
      <g>
        {data.map((datum, i) => {
          const angle = angleStep * i - Math.PI / 2;
          const value = datum[keys[0]];
          const radius = radiusScale(value);
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          const isSelected = datum.competency === selectedLabelId;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={8}
              fill="white"
              stroke={isSelected ? 'blue' : '#8c98f2'}
              strokeWidth={4}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={event => {
                onClickDot(datum.competency, event);
              }}
              style={{cursor: 'pointer'}}
            />
          );
        })}
      </g>
    );
  };
};

const LabelComponent = ({
  data,
  id,
  x,
  y,
  angle,
  anchor,
  selectedLabelId,
  setSelectedLabelId
}: GridLabelProps) => {
  const rectWidth = 50;
  const rectHeight = 20;
  const isSelected = id === selectedLabelId;

  const handleCloseClick = () => {
    setSelectedLabelId(null);
  };

  return (
    <g transform={`translate(${x}, ${y})`}>
      <g>
        <rect
          width={200}
          height={70}
          rx={8}
          // eslint-disable-next-line no-nested-ternary
          x={anchor === 'end' ? -180 : anchor === 'middle' ? -100 : -30}
          y={-40}
          fill="#FAFAFA" // Background color
          style={{display: isSelected ? 'block' : 'none'}} // Affiche le rect seulement si sélectionné
        />
        <rect
          // eslint-disable-next-line no-nested-ternary
          x={anchor === 'end' ? -37 : anchor === 'middle' ? -25 : -13}
          y={-20}
          width={rectWidth}
          height={rectHeight}
          rx={12}
          fill="url(#labelGradient)"
        />
        <text
          textAnchor={anchor}
          y={-5}
          style={{
            color: 'blue',
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontSize: '12px',
            fontWeight: 'bold',
            fill: '#0061FF',
            lineHeight: '16px',
            opacity: isSelected ? 1 : 0.5
          }}
        >
          {findProfile1ValueById(id, data)}
        </text>
        <text
          textAnchor={anchor}
          y={10}
          style={{
            textAlign: 'center',
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: 600,
            fill: '#1D1D2B',
            lineHeight: '20px',
            opacity: isSelected ? 1 : 0.5
          }}
        >
          {id}
        </text>

        {isSelected ? (
          <text
            // eslint-disable-next-line no-nested-ternary
            x={anchor === 'end' ? 10 : anchor === 'middle' ? 90 : 150}
            y={-20} // Position de la croix en haut
            textAnchor={anchor}
            style={{
              fill: '#666',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleCloseClick}
          >
            ×
          </text>
        ) : null}
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

  const labelGradient = {
    id: 'labelGradient',
    type: 'linearGradient',
    colors: [
      {offset: 0, color: 'rgba(0, 97, 255, 0.10)'},
      {offset: 100, color: 'rgba(147, 107, 255, 0.10)'}
    ]
  };
  const [selectedLabelId, setSelectedLabelId] = useState(null);

  const handleDotClick = useCallback((id, event) => {
    event.stopPropagation();
    setSelectedLabelId(id);
  }, []);
  const handleContainerClick = useCallback(() => {
    setSelectedLabelId(null);
  }, []);

  const CustomDotLayer = useCallback(createCustomDotLayer(handleDotClick, selectedLabelId), [
    handleDotClick,
    selectedLabelId
  ]);

  return (
    <div onClick={handleContainerClick} style={{height: '100%', width: '100%'}}>
      <ResponsiveRadar
        data={data}
        keys={keys}
        indexBy={indexBy}
        borderWidth={0}
        gridShape="linear"
        gridLabelOffset={30}
        maxValue={100}
        valueFormat=">-.2f"
        margin={{top: 70, right: 80, bottom: 40, left: 80}}
        dotSize={12}
        dotColor="white"
        dotBorderColor="#8c98f2"
        dotBorderWidth={4}
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
        layers={[
          'grid',
          'axes',
          'layers',
          'slices',
          strokeGradientLayer,
          'legends',
          // 'dots',
          CustomDotLayer
        ]}
        defs={[fillGradient, strokeGradient, labelGradient]}
        fill={[{match: '*', id: 'fillGradient'}]}
        // eslint-disable-next-line react/jsx-no-bind, react/no-unstable-nested-components
        gridLabel={props => {
          return (
            <LabelComponent
              {...props}
              data={data}
              selectedLabelId={selectedLabelId}
              setSelectedLabelId={setSelectedLabelId}
            />
          );
        }}
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
