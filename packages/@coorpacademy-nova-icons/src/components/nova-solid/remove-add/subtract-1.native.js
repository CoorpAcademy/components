import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M21 14a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h16a1 1 0 011 1v4z"
    />
  </Svg>
);

export default SvgComponent;
