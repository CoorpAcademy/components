import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 27 27" {...props}>
    <G fill={props.color}>
      <Path d="M13.502 12.506c1.8 0 3.2-1.5 3.2-3.2s-1.4-3.3-3.2-3.3-3.3 1.5-3.3 3.2 1.5 3.3 3.3 3.3zM13.502 13.306c-3.8 0-6.5 2-6.5 4.9v.8h13v-.8c0-2.9-2.7-4.9-6.5-4.9z" />
    </G>
    <Circle fill="none" stroke={props.color} strokeWidth={2} cx={13.5} cy={13.5} r={12.5} />
  </Svg>
);

export default SvgComponent;
