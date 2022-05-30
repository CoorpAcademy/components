import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      d="M13.3 9c.8-.5.8-1.6 0-2.1l-11-5.5c-.7-.3-1.6.2-1.6 1v11c0 .8.9 1.4 1.6 1l11-5.4z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
