import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill={props.color}>
      <Path d="M12 10.823l8.965-5.563A1.977 1.977 0 0020 5H4c-.352 0-.678.1-.965.26L12 10.823z" />
      <Path d="M12.527 12.849a1 1 0 01-1.054.001l-9.47-5.877c0 .009-.003.018-.003.026v9c0 1.102.897 2 2 2h16c1.103 0 2-.898 2-2v-9l-.003-.027-9.47 5.877z" />
    </G>
  </Svg>
);

export default SvgComponent;
