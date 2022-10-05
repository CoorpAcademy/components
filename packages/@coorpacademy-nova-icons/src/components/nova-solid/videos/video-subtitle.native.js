import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M20 4.003H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-9 6H8c-.551 0-1 .449-1 1v2c0 .552.449 1 1 1h3v2H8c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3v2zm8 0h-3c-.551 0-1 .449-1 1v2c0 .552.449 1 1 1h3v2h-3c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3v2z"
    />
  </Svg>
);

export default SvgComponent;
