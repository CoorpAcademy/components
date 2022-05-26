import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M22 3H2C.897 3 0 3.896 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2V5c0-1.104-.897-2-2-2zm0 2l-.002 10H2V5h20zM2 18v-1h19.997v1H2z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
