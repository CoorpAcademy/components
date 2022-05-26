import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 33 32" {...props}>
    <Path
      fill={props.color}
      d="M.2 5c0-.4.5-.6.8-.4L14.8 14V5c0-.4.5-.6.8-.4l16.1 11c.3.2.3.6 0 .8l-16.1 11c-.3.2-.8 0-.8-.4v-9L1 27.5c-.3.2-.8 0-.8-.4V5z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
