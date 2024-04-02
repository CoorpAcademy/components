import PropTypes from 'prop-types';

// PROPTYPES
export const learningProfileRadarChartPropTypes = {
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

export const customDotPropTypes = {
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

export const customTooltipPropTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number
    })
  ),
  label: PropTypes.string
};

export const gradientPropTypes = {
  type: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string)
};

// TYPES
export type ColorType = {
  gradient?: {
    fill?: string[];
    stroke?: string[];
  };
  percentage?: {
    color?: string;
    background?: string;
  };
  label?: {
    color?: string;
  };
};

export type LearningProfileRadarChartPropTypes = {
  data: {
    [key: string]: number | number[];
  };
  totalDataset: number;
  onClick: () => void;
  colors?: ColorType[];
};

export type CustomDotPropTypes = {
  cx: number;
  cy: number;
  payload: {
    payload: {
      value: number;
      subject: string;
    };
    name: string;
  };
  onDotClick: (name: string) => void;
  index: number;
  activeDot?: {
    label: string;
    value: number;
    key: string;
  };
  dataKey: string;
  stroke: string;
};

export type CustomTooltipPropTypes = {
  active: boolean;
  payload: {
    value: number;
  }[];
  label: string;
};

export type GradientPropTypes = {
  type: string;
  colors: string[];
};

export type TickType = {
  offset: {x: number; y: number};
  alignment: 'center' | 'start' | 'end';
  margin?: 'auto';
  marginLeft?: 'auto';
  marginRight?: 'auto';
};

export type FormatedColorsType = {
  gradient: {
    fill: string[];
    stroke: string[];
  };
  percentage: {
    color: string;
    background: string;
  };
  label: {
    color: string;
  };
};

export type FormatedDataType = {
  subject: string;
} & {
  [key: string]: number | string;
};

export type ActiveDotType = {
  key: string;
  value: number | string;
  label: string;
};
