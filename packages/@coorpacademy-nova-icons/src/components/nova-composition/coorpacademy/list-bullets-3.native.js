import * as React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Circle cx={5} cy={5} r={3} />
      <Circle cx={5} cy={12} r={3} />
      <Circle cx={5} cy={19} r={3} />
      <Path d="M10 4h12v2H10zM10 11h12v2H10zM10 18h12v2H10z" />
    </G>
  </Svg>
);

export default SvgComponent;
