import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M12 5C5.1 5 0 12.6 0 12.6s5.1 7.6 12 7.6 12-7.6 12-7.6S18.9 5 12 5zm0 12c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.4 0 4.4 2 4.4 4.4S14.4 17 12 17z" />
      <Path d="M12 10.5c-.6 0-1.1.2-1.5.6-.4.4-.6 1-.6 1.5 0 .6.2 1.1.6 1.5.4.4 1 .6 1.5.6.6 0 1.1-.2 1.5-.6.4-.4.6-1 .6-1.5 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6z" />
    </G>
  </Svg>
);

export default SvgComponent;
