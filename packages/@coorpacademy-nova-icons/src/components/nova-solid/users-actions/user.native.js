import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M12.002 12.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.795 4 4 4zM12.002 13.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
