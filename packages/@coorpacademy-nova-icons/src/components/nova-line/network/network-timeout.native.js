import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 8h4v1h2V8h3.736c.085.327.15.66.195 1h2.018C19.445 3.953 15.177 0 10 0 4.486 0 0 4.486 0 10c0 5.177 3.953 9.445 9 9.949v-2.018a8.258 8.258 0 0 1-1-.195V14h1v-2H8V8zm6-4.918A8.051 8.051 0 0 1 16.918 6H14V3.082zm-6-.818C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6H8V2.264zM6 16.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6z" />
      <Path d="M17 10c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Path d="M18 13h-2v5h4v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
