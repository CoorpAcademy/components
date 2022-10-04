import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.62 17.1" {...props}>
    <Path
      d="M23.62.5c0-.4-.45-.64-.78-.41L12.71 7.05V.5c0-.4-.45-.64-.78-.41L.22 8.14c-.29.2-.29.63 0 .82l11.71 8.05c.33.23.78 0 .78-.41v-6.55l10.13 6.96c.33.23.78 0 .78-.41V.5z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
