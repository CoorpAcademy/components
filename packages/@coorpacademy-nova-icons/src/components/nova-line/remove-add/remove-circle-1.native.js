import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M12 2.001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M14.293 8.294L12 10.587 9.707 8.294 8.293 9.708l2.293 2.293-2.293 2.293 1.414 1.414L12 13.415l2.293 2.293 1.414-1.414-2.293-2.293 2.293-2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
