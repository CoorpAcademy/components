import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 22C6.486 22 2 17.515 2 12 2 6.487 6.486 2 12 2s10 4.486 10 10c0 5.515-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill={props.color}
    />
    <Path
      d="M13 15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.011 4.011 0 01-3 3.875V15z"
      fill={props.color}
    />
    <Circle cx={12} cy={17} r={1.25} fill={props.color} />
  </Svg>
);

export default SvgComponent;
