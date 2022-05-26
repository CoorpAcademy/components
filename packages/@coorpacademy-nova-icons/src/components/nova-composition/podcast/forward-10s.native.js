import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 16 16" xmlSpace="preserve" {...props}>
    <Path
      className="prefix__st0"
      d="M7.4 1.4c1.8 0 3.5.7 4.7 1.9l.6-.6c.3-.3.7-.1.7.3v2.6c0 .2-.1.4-.4.4h-2.6c-.3 0-.6-.4-.3-.7l1.1-1.1c-1-1-2.3-1.6-3.8-1.6C4.4 2.6 2 5 2 8c0 2.8 2.2 5.1 5 5.3.2 0 .4.2.4.4v.6c0 .2-.2.4-.4.4C3.5 14.5.8 11.6.8 8.1.6 4.3 3.7 1.4 7.4 1.4z"
    />
    <Path
      className="prefix__st0"
      d="M8.2 7l-1.5.6.2 1 1-.3v4.4H9V7h-.8zM12.3 12.8c1.4 0 2.2-1.2 2.2-2.9S13.7 7 12.3 7s-2.2 1.2-2.2 2.9.8 2.9 2.2 2.9zm0-1.1c-.7 0-1.1-.6-1.1-1.8 0-1.2.4-1.8 1.1-1.8s1.1.6 1.1 1.8c0 1.1-.4 1.8-1.1 1.8z"
    />
  </Svg>
);

export default SvgComponent;
