import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10h2c0-5.514-4.485-10-10-10C4.486 0 0 4.486 0 10s4.486 10 10 10a9.926 9.926 0 0 0 4-.841V8h3.737c.165.641.263 1.309.263 2zM6 16.918A8.041 8.041 0 0 1 3.083 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.083A8.041 8.041 0 0 1 6 3.082V6zm6 11.736c-.641.166-1.309.264-2 .264s-1.359-.098-2-.264V14h4v3.736zM12 12H8V8h4v4zm0-6H8V2.264C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6zm2 0V3.082A8.051 8.051 0 0 1 16.918 6H14z" />
      <Path d="M21 17h-2c-.551 0-1-.449-1-1s.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
