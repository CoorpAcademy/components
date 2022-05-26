import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M12 2.001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm4.707 13.293l-1.414 1.414L12 13.415l-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414L12 10.587l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293z"
    />
  </Svg>
);

export default SvgComponent;
