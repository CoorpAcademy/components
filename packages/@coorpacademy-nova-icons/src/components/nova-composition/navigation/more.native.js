import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill={props.color}
      d="M17.19 10.63V6.583h-6.56V.023H6.583v6.56H.023v4.046h6.56v6.561h4.046v-6.56z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
