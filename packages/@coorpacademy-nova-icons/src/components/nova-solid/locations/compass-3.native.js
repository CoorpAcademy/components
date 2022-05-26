import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill={props.color}>
      <Path d="M13.331 13.331l-2.662-2.663-1.33 3.994 3.992-1.33z" />
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.912 12.911l-8.735 2.916 2.912-8.74 8.735-2.911-2.912 8.735z" />
    </G>
  </Svg>
);

export default SvgComponent;
