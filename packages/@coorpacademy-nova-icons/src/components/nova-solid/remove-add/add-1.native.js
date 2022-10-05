import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M15 9V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H4a1 1 0 00-1 1v4a1 1 0 001 1h5v5a1 1 0 001 1h4a1 1 0 001-1v-5h5a1 1 0 001-1v-4a1 1 0 00-1-1h-5z"
    />
  </Svg>
);

export default SvgComponent;
