import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 10 12" {...props}>
    <G fillRule="evenodd" clipRule="evenodd" fill={props.color}>
      <Path
        d="M1.2 5c.7 0 1.2.6 1.2 1.2V10c0 .7-.6 1.2-1.2 1.2S0 10.7 0 10V6.2C0 5.6.6 5 1.2 5zM5 2.5c.7 0 1.2.6 1.2 1.2V10c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V3.7c0-.6.5-1.2 1.2-1.2zM8.8 0c.6 0 1.2.6 1.2 1.2V10c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V1.2C7.5.6 8.1 0 8.8 0z"
        opacity={0.4}
      />
    </G>
  </Svg>
);

export default SvgComponent;
