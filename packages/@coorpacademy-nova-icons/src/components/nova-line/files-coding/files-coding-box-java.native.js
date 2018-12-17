import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M5.625 13.25a.75.75 0 0 1-1.5 0h-1.5c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25V9.5h-1.5v3.75zM16.875 9.5h-1.543l-.718 2.926-.739-2.926h-1.5l1.472 6h1.544l-.016-.06zM20.625 9.5h-3a.75.75 0 0 0-.75.75v5.25h1.5V14h1.5v1.5h1.5v-5.25a.75.75 0 0 0-.75-.75zm-.75 3h-1.5V11h1.5v1.5zM11.625 9.5h-3a.75.75 0 0 0-.75.75v5.25h1.5V14h1.5v1.5h1.5v-5.25a.75.75 0 0 0-.75-.75zm-.75 3h-1.5V11h1.5v1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
