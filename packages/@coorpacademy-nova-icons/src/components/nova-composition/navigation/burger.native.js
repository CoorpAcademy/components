import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" {...props}>
    <Path
      fill={props.color}
      d="M15 10H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM15 5H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM15 0H1C.4 0 0 .4 0 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"
    />
  </Svg>
);

export default SvgComponent;
