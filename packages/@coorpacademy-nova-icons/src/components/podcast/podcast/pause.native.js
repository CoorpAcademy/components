import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      d="M2 2a1 1 0 011-1h6a1 1 0 011 1v20a1 1 0 01-1 1H3a1 1 0 01-1-1V2zM14 2a1 1 0 011-1h6a1 1 0 011 1v20a1 1 0 01-1 1h-6a1 1 0 01-1-1V2z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
