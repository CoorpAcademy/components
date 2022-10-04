import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.76 20.77" {...props}>
    <Path
      d="M20.21 11.28a1 1 0 000-1.79L1.45.11A.997.997 0 000 1v18.77c0 .74.78 1.23 1.45.89l18.76-9.38z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
