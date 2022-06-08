import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 21.37" {...props}>
    <Path
      d="M17.35.02c-2.13 0-4.1 1.11-5.34 2.78C10.77 1.13 8.8.02 6.67.02 2.99.02 0 3.01 0 6.7c0 7.33 10.84 14.19 11.31 14.47.21.13.45.2.69.2s.48-.08.69-.21C13.14 20.87 24 14.01 24 6.68 24 3 21 .01 17.33.01l.02.02z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
