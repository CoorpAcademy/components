import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M1.556 8.361a1.556 1.556 0 100-3.111 1.556 1.556 0 000 3.111zm5.444 0A1.556 1.556 0 107 5.25a1.556 1.556 0 000 3.111zm5.444 0a1.556 1.556 0 100-3.111 1.556 1.556 0 000 3.111z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
