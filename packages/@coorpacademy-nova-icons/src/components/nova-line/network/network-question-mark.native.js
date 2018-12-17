import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9.994h2C19.996 4.482 15.512 0 10 0 4.486 0 0 4.486 0 10s4.486 10 10 10a9.933 9.933 0 0 0 4-.841V8h3.736c.166.639.263 1.305.264 1.994zM6 16.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6zm6 11.736c-.641.166-1.309.264-2 .264s-1.359-.098-2-.264V14h4v3.736zM12 12H8V8h4v4zm0-6H8V2.264C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6zm2 0V3.082A8.051 8.051 0 0 1 16.918 6H14z" />
      <Path d="M20 11.994c-2.205 0-4 1.795-4 4h2a2 2 0 1 1 2 2h-1v3h2v-1.127a4.007 4.007 0 0 0 3-3.873c0-2.204-1.795-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
