import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" {...props}>
    <Path fill={props.color} d="M16.6 14H.6C3.7 11.4 5.2 6.9 5 .6L16.3.5" />
  </Svg>
);

export default SvgComponent;
