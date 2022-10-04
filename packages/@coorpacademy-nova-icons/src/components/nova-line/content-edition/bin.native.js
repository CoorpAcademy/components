import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M5 20c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8H5v12zm2-10h10l.001 10H7V10zM15 5V3H9v2H3v2h18V5z" />
      <Path d="M9 12h2v6H9zM13 12h2v6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
