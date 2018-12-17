import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.875 10.75H5v1.75h.875a.876.876 0 0 0 0-1.75zM17.25 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.785-1.75-1.75-1.75z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.875 14.25H5V16H3.25V9h2.625A2.629 2.629 0 0 1 8.5 11.625a2.628 2.628 0 0 1-2.625 2.625zm8.75-3.5h-3.062a.438.438 0 1 0 0 .876h.875c1.207 0 2.188.981 2.188 2.188S13.644 16 12.438 16H9.375v-1.75h3.062a.438.438 0 1 0 0-.876h-.875a2.19 2.19 0 0 1-2.188-2.188A2.191 2.191 0 0 1 11.562 9h3.062v1.75zM17.25 16H15.5V9h1.75c1.93 0 3.5 1.57 3.5 3.5 0 1.931-1.57 3.5-3.5 3.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
