import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 22C6.486 22 2 17.515 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill={props.color}
    />
    <Path fill={props.color} d="M11 6h2v7h-2z" />
    <Circle cx={12} cy={16} r={1.25} fill={props.color} />
  </Svg>
);

export default SvgComponent;
