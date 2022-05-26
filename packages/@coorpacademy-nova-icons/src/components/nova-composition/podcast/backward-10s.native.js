import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 16 16" xmlSpace="preserve" {...props}>
    <Path
      className="prefix__st0"
      d="M8.6 1.4c-1.7 0-3.4.7-4.6 1.9l-.6-.6c-.3-.3-.8-.1-.8.3v2.6c0 .2.2.4.4.4h2.6c.4 0 .6-.4.4-.7l-1.1-1c1-1 2.3-1.6 3.8-1.6C11.6 2.6 14 5 14 8c0 2.8-2.2 5.1-5 5.3-.2 0-.4.2-.4.4v.6c0 .2.2.4.4.4 3.5-.2 6.2-3.1 6.2-6.6.2-3.8-2.9-6.7-6.6-6.7zM2.2 7l-1.5.6.2 1 1-.3v4.4h1.2V7h-.9z"
    />
    <Path
      className="prefix__st0"
      d="M6.3 12.8c1.4 0 2.2-1.2 2.2-2.9C8.6 8.2 7.8 7 6.3 7S4.1 8.2 4.1 9.9s.8 2.9 2.2 2.9zm0-1.1c-.7 0-1.1-.6-1.1-1.8 0-1.3.3-1.9 1.1-1.9s1.1.6 1.1 1.8c0 1.2-.4 1.9-1.1 1.9z"
    />
  </Svg>
);

export default SvgComponent;
