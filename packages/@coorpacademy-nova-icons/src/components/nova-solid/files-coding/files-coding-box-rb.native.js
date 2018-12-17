import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.939 10.75h-1.312v.875h1.312a.438.438 0 0 0 0-.875zM8.501 10.75h-.875v1.75h.875a.876.876 0 0 0 0-1.75zM15.939 13.375h-1.312v.875h1.312a.437.437 0 0 0 0-.875z" />
      <Path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM11.126 16H9.1l-1.022-1.75h-.452V16h-1.75V9h2.625a2.629 2.629 0 0 1 2.625 2.625c0 .943-.504 1.765-1.253 2.227L11.126 16zm7-2.188A2.19 2.19 0 0 1 15.939 16h-3.062V9h3.062a2.19 2.19 0 0 1 2.187 2.188c0 .494-.171.946-.449 1.312.278.367.449.818.449 1.312z" />
    </G>
  </Svg>
);

export default SvgComponent;
