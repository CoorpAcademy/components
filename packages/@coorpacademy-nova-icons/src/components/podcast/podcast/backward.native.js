import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      d="M15.9 2.5c0-.2-.2-.3-.4-.2L8.8 7V2.5c0-.2-.2-.3-.4-.2L.6 7.8c-.1.1-.1.3 0 .4l7.8 5.5c.1.1.4 0 .4-.2V9l6.7 4.8c.1.1.4 0 .4-.2V2.5z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
