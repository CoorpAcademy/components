import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.88 17.411C18.3 19.09 15.271 20 12.16 20s-6.14-.91-8.72-2.589L2 18.85C4.98 20.891 8.53 22 12.16 22s7.18-1.109 10.16-3.15l-1.44-1.439z" />
      <Path d="M12.32 18c3.309 0 6-2.691 6-6 0-3.025-4.686-8.959-5.22-9.625l-.78-.975-.78.975c-.534.666-5.22 6.6-5.22 9.625 0 3.309 2.692 6 6 6zm0-13.365c1.792 2.393 4 5.843 4 7.365 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.522 2.209-4.973 4-7.365z" />
      <Path d="M15.07 12h-1.5c0 .69-.561 1.25-1.25 1.25v1.5A2.752 2.752 0 0 0 15.07 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
