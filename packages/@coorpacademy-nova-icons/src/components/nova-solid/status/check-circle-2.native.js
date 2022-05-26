import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill={props.color}
      d="M12.042 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.478-10-10-10zm-.75 15.75l-5-3.75 1.5-2 3 2.25 5.25-7 2 1.5-6.75 9z"
    />
  </Svg>
);

export default SvgComponent;
