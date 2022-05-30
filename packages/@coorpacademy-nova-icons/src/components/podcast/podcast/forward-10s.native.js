import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 16 16" xmlSpace="preserve" {...props}>
    <Path
      className="prefix__st0"
      d="M7.3 1.3c1.8 0 3.5.7 4.7 2l.7-.7c.2-.2.6-.1.6.2v2.9c0 .1-.1.3-.3.3h-2.9c-.3 0-.4-.4-.2-.6l1.2-1.2c-1-1-2.3-1.6-3.8-1.6C4.4 2.7 2 5 2 8c0 2.8 2.2 5.2 5 5.3.2 0 .3.2.3.3v.7c0 .2-.1.3-.3.3C3.5 14.5.7 11.6.7 8c0-3.7 3-6.7 6.6-6.7z"
    />
    <Path
      className="prefix__st0"
      d="M8.2 7.1l-1.4.5.2.9 1.1-.3v4.4h1.1V7.1h-1zM12.3 12.8c1.4 0 2.2-1.2 2.2-2.9S13.7 7 12.3 7C10.9 7 10 8.1 10 9.9c0 1.7.9 2.9 2.3 2.9zm0-1.1c-.8 0-1.1-.6-1.1-1.8s.4-1.8 1.1-1.8 1.1.7 1.1 1.8c0 1.2-.4 1.8-1.1 1.8z"
    />
  </Svg>
);

export default SvgComponent;
