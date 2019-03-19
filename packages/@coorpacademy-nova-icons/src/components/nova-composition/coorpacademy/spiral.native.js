import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 802 802" xmlSpace="preserve" {...props}>
    <G opacity={0.08}>
      <G id="prefix__Group">
        <Path id="prefix__Path" className="prefix__st1" d="M432.8.4h-64.1l32.1 400.8z" />
        <Path
          className="prefix__st1"
          d="M584 .4h-72.6L400.8 401.2zM290.2.4h-72.7l183.3 400.8zM801.6 210.5v-85.6L400.8 401.2zM795.6.4H686L400.8 401.2zM801.6 363.1V297L400.8 401.2zM115.7.4H6l394.8 400.8zM0 439.3v66l400.8-104.1z"
        />
        <Path className="prefix__st1" d="M217.5 802h72.7l110.6-400.8z" />
        <Path className="prefix__st1" d="M0 591.7v85.6l400.8-276.1zM686 802h109.6L400.8 401.2z" />
        <Path className="prefix__st1" d="M368.7 802h64.1l-32-400.8z" />
        <Path className="prefix__st1" d="M0 297v66.1l400.8 38.1z" />
        <Path
          className="prefix__st1"
          d="M6 802h109.7l285.1-400.8zM511.4 802H584L400.8 401.2zM0 124.9v85.6l400.8 190.7zM400.8 401.2l400.8 104.1v-66zM801.6 677.3v-85.6L400.8 401.2z"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
