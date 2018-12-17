import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 14V8h3.736c.166.641.264 1.309.264 2h2c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10v-2a7.959 7.959 0 0 1-2-.264V14h6zm0-10.918A8.051 8.051 0 0 1 16.918 6H14V3.082zm-6-.818C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6H8V2.264zM8 8h4v4H8V8zm-2 8.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6z" />
      <Path d="M24 16.281h-4.286L18 11.994l-1.715 4.287H12l3.708 3.13-1.994 4.583L18 21.16l4.285 2.834-1.993-4.583z" />
    </G>
  </Svg>
);

export default SvgComponent;
