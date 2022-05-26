import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M3.707 21.707L9 16.414V19h2v-6H5v2h2.586l-5.293 5.293zM19 9h-2.586l5.293-5.293-1.414-1.414L15 7.586V5h-2v6h6z" />
    </G>
  </Svg>
);

export default SvgComponent;
