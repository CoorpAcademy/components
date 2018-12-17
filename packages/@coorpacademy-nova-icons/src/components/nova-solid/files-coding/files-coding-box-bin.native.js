import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9.375 13.812A2.19 2.19 0 0 1 7.188 16H4.126V9h3.062a2.19 2.19 0 0 1 2.188 2.188c0 .495-.171.946-.449 1.312.277.367.448.818.448 1.312zm4.375-3.062h-.875v3.5h.875V16h-3.5v-1.75h.875v-3.5h-.875V9h3.5v1.75zm6.125 4.375a.875.875 0 0 1-1.603.485l-1.896-2.845V16h-1.75V9.875a.876.876 0 0 1 1.603-.486l1.897 2.845V9h1.75v6.125z" />
      <Path d="M7.188 10.75H5.876v.875h1.312a.438.438 0 1 0 0-.875zM7.188 13.375H5.876v.875h1.312a.438.438 0 1 0 0-.875z" />
    </G>
  </Svg>
);

export default SvgComponent;
