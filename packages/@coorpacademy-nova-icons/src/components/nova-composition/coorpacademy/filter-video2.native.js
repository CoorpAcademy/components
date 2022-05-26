import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.color}
      d="M3.5 22c-.8 0-1.5-.7-1.5-1.5V4H.5c-.3 0-.5.2-.5.5v19c0 .3.2.5.5.5h19c.3 0 .5-.2.5-.5V22H3.5z"
    />
    <Path
      fill={props.color}
      d="M23.5 0h-20c-.3 0-.5.2-.5.5v20c0 .3.2.5.5.5h20c.3 0 .5-.2.5-.5V.5c0-.3-.2-.5-.5-.5zm-5.7 10.6l-7 4.3c-.3.2-.8 0-.8-.4v-8c0-.4.4-.6.7-.4l7 3.7c.4.1.4.6.1.8z"
    />
    <Path fill="none" d="M0 0h24v24H0z" />
  </Svg>
);

export default SvgComponent;
