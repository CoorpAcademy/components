import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <Path
      fill={props.color}
      d="M21.5 20.5V22h5v-1.5c0-1.37-1.12-2.5-2.5-2.5-1.41 0-2.5 1.13-2.5 2.5zm-2 1.5v-1.5c0-2.47 2-4.5 4.5-4.5 2.47 0 4.5 2.03 4.5 4.5V22h.5c1.09 0 2 .91 2 2v6c0 1.13-.91 2-2 2H19c-1.12 0-2-.87-2-2v-6a2 2 0 012-2h.5z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
