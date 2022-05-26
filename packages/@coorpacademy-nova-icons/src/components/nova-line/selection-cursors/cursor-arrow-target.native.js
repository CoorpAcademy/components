import * as React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill={props.color}>
      <Circle cx={11} cy={13.001} r={1} />
      <Path d="M22.414 3.001L21 1.587l-4.207 4.207L14 3.001v7h7l-2.793-2.793zM8 13.001c0-1.654 1.346-3 3-3v-2c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5h-2c0 1.654-1.346 3-3 3s-3-1.345-3-3z" />
      <Path d="M11 20.001c-3.859 0-7-3.14-7-7s3.141-7 7-7v-2c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9h-2c0 3.861-3.141 7-7 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
