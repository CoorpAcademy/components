import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" {...props}>
    <Path
      fill={props.color}
      d="M32.8 5c0-.4-.5-.6-.8-.4L18.2 14V5c0-.4-.5-.6-.8-.4l-16.1 11c-.3.2-.3.6 0 .8l16.1 11c.3.2.8 0 .8-.4v-9L32 27.5c.3.2.8 0 .8-.4V5z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
