import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 19.159V8h3.736c.166.641.264 1.309.264 2h2c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10a9.933 9.933 0 0 0 4-.841zm0-16.077A8.051 8.051 0 0 1 16.918 6H14V3.082zm-6-.818C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6H8V2.264zM8 8h4v4H8V8zm-2 8.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6zm2 8h4v3.736c-.641.166-1.309.264-2 .264s-1.359-.098-2-.264V14z" />
      <Path d="M17 12v2h3.586l-5.209 5.211C13.771 20.83 12.611 22 11 22H7v2h4c2.444 0 3.998-1.566 5.797-3.381L22 15.414V19h2v-7h-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
