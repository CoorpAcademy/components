import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M15.938 9h-3.063v7h3.063a2.19 2.19 0 0 0 2.188-2.188c0-.495-.171-.945-.449-1.313a2.16 2.16 0 0 0 .449-1.313A2.191 2.191 0 0 0 15.938 9zm0 5.25h-1.313v-.875h1.313a.439.439 0 0 1 0 .875zm0-2.625h-1.313v-.875h1.313a.439.439 0 0 1 0 .875zM11.125 11.625A2.629 2.629 0 0 0 8.5 9H5.875v7h1.75v-1.75h.453L9.099 16h2.026l-1.253-2.147a2.618 2.618 0 0 0 1.253-2.228zM8.5 12.5h-.875v-1.75H8.5a.876.876 0 0 1 0 1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
