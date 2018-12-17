import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.159 14A9.93 9.93 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10a9.933 9.933 0 0 0 4-.841V14h5.159zM14 3.082A8.051 8.051 0 0 1 16.918 6H14V3.082zM14 8h3.736c.166.641.264 1.309.264 2 0 .691-.098 1.359-.264 2H14V8zm-8 8.918A8.051 8.051 0 0 1 3.082 14H6v2.918zM6 12H2.264A7.959 7.959 0 0 1 2 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.051 8.051 0 0 1 6 3.082V6zm6 11.736c-.641.166-1.309.264-2 .264s-1.359-.098-2-.264V14h4v3.736zM12 12H8V8h4v4zm0-6H8V2.264C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6zM23.707 17.707l-1.414-1.414L20 18.586l-2.293-2.293-1.414 1.414L18.586 20l-2.293 2.293 1.414 1.414L20 21.414l2.293 2.293 1.414-1.414L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
