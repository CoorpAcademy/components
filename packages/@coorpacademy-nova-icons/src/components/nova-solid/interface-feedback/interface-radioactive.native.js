import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 11c0-1.43.752-2.717 2.011-3.446a.999.999 0 0 0 .365-1.366L7.37.98A1 1 0 0 0 6.003.615C2.301 2.758 0 6.737 0 11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zM17.996.615a.996.996 0 0 0-1.367.365l-3.006 5.208a1.003 1.003 0 0 0 .365 1.367C15.248 8.283 16 9.57 16 11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1c0-4.263-2.301-8.241-6.004-10.385zM15.356 14.812a1.002 1.002 0 0 0-1.367-.364c-1.271.734-2.706.733-3.979-.001a1 1 0 0 0-1.366.366L5.638 20.02a1.002 1.002 0 0 0 .365 1.366A12 12 0 0 0 12 23c2.096 0 4.17-.558 5.996-1.615a1 1 0 0 0 .365-1.366l-3.005-5.207z" />
      <Circle cx={12} cy={11} r={2.5} />
    </G>
  </Svg>
);

export default SvgComponent;
