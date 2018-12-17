import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.897 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M7.188 9H4.125v7h3.063a2.19 2.19 0 0 0 2.187-2.188c0-.494-.171-.946-.448-1.313.277-.366.448-.818.448-1.313A2.19 2.19 0 0 0 7.188 9zm0 5.25H5.875v-.875h1.313a.438.438 0 0 1 0 .875zm0-2.625H5.875v-.875h1.313a.438.438 0 0 1 0 .875zM18.125 12.235L16.228 9.39a.874.874 0 0 0-1.603.485V16h1.75v-3.235l1.897 2.845a.874.874 0 0 0 1.603-.485V9h-1.75v3.235zM10.25 10.75h.875v3.5h-.875V16h3.5v-1.75h-.875v-3.5h.875V9h-3.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
