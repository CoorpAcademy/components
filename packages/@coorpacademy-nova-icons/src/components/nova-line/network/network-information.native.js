import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 8h4v1h2V8h3.736c.085.327.15.66.195 1h2.018C19.445 3.954 15.177 0 10 0 4.486 0 0 4.486 0 10c0 5.178 3.953 9.446 9 9.949v-2.016a8.26 8.26 0 0 1-1-.196V14h1v-2H8V8zm6-4.917A8.056 8.056 0 0 1 16.918 6H14V3.083zm-6-.819C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6H8V2.264zM6 16.918A8.044 8.044 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.953 7.953 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.056 8.056 0 0 1 6 3.083V6z" />
      <Path d="M17 9.994c-3.859 0-7 3.141-7 7 0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.859-3.141-7-7-7zm0 12c-2.757 0-5-2.242-5-5 0-2.756 2.243-5 5-5s5 2.244 5 5c0 2.758-2.243 5-5 5z" />
      <Path d="M16 16.994h2v4h-2z" />
      <Circle cx={17} cy={15} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
