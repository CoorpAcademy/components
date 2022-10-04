import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M4.428 13.88l8.569-8.571L18.689 11l-8.568 8.57zM20.104 9.59l.72-.719a4.031 4.031 0 000-5.693 4.031 4.031 0 00-5.693 0l-.719.72 5.692 5.692zM8.4 20.68l-5.156 1.288a1 1 0 01-1.213-1.212L3.32 15.6l5.08 5.08z" />
    </G>
  </Svg>
);

export default SvgComponent;
