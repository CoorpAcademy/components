import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 12 12" fill={props.color} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M4.694 10.525V7.437h2.609v3.088c0 .34.293.618.652.618h1.957c.358 0 .652-.278.652-.618V6.202h1.108c.3 0 .444-.352.216-.537l-5.452-4.65a.685.685 0 00-.874 0L.109 5.665c-.221.185-.084.537.216.537h1.108v4.323c0 .34.294.618.653.618h1.956c.359 0 .652-.278.652-.618z" />
  </Svg>
);

export default SvgComponent;
