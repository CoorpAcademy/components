import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M1.5 0a1.5 1.5 0 00-.9 2.7l6.8 5.1c.356.266.844.266 1.2 0l6.8-5.1a1.5 1.5 0 00-.9-2.7h-13zM0 3.5V10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V3.5L9.2 8.6a1.997 1.997 0 01-2.4 0L0 3.5z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
