import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M20 3.003H3a2 2 0 00-2 2v14a2 2 0 002 2h17a2 2 0 002-2v-14a2 2 0 00-2-2zm-12 2h2v2H8v-2zm-3 14H3v-2h2v2zm0-12H3v-2h2v2zm5 12H8v-2h2v2zm5 0h-2v-2h2v2zm-6-4v-6l6 3-6 3zm6-8h-2v-2h2v2zm5 12h-2v-2h2v2zm0-12h-2v-2h2v2z"
    />
  </Svg>
);

export default SvgComponent;
