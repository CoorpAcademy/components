import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M11.875 13H10v5h1.25v-1.25h.625c1.033 0 1.875-.841 1.875-1.875S12.908 13 11.875 13zm0 2.5h-.625v-1.25h.625a.626.626 0 0 1 0 1.25zM5 14.563c0 .862.701 1.563 1.563 1.563h.625a.313.313 0 0 1 0 .626H5V18h2.188c.861 0 1.563-.701 1.563-1.563s-.701-1.563-1.563-1.563h-.625a.313.313 0 0 1 0-.626H8.75V13H6.563C5.701 13 5 13.701 5 14.563zM3 0h19v2H3z" />
      <Path d="M20 9H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zM4 20v-9h16l.001 9H4z" />
      <Path d="M18.125 13h-2.5a.624.624 0 0 0-.625.625V18h1.25v-1.25h1.25V18h1.25v-4.375a.624.624 0 0 0-.625-.625zm-.625 2.5h-1.25v-1.25h1.25v1.25z" />
      <Circle cx={6} cy={7} r={1} />
      <Circle cx={6} cy={4} r={1} />
      <Circle cx={18} cy={7} r={1} />
      <Circle cx={18} cy={4} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
