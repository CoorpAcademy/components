import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 17 17" {...props}>
    <Path fill={props.color} d="M0 7h17v4H0z" fillRule="evenodd" />
  </Svg>
);

export default SvgComponent;
