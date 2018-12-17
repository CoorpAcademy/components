import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M20.8 14.4L18 10.667V0h-2v1H8V0H6v10.667L3.2 14.4c-.1.134-.2.373-.2.6v9h2v-5h1v3h2v-3h8v3h2v-3h1v5h2v-9c0-.227-.1-.466-.2-.6zM16 10H8V7h8v3zm0-7v2H8V3h8z"
    />
  </Svg>
);

export default SvgComponent;
