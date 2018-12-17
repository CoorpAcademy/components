import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <Path
      d="M21.721 10.307a1.002 1.002 0 0 0-1.037-.255l-3.106 1.036-4.763-6.668c-.377-.525-1.252-.525-1.629 0l-4.763 6.668-3.106-1.036a1 1 0 1 0-1.253 1.3l3 8A1 1 0 0 0 6 20h12c.417 0 .79-.259.937-.648l3-8c.135-.361.05-.768-.216-1.045zM9.618 14h4.764l2 4H7.618l2-4zM12 6.721l3.592 5.028-.754.251H9.162l-.754-.251L12 6.721zm-7.328 5.89l2.918.973-1.459 2.918-1.459-3.891zm13.197 3.891l-1.459-2.918 2.918-.973-1.459 3.891z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
