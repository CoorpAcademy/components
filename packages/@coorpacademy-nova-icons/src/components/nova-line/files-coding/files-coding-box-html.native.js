import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <Path d="M18.75 9.5h-1.5v6H21V14h-2.25zM15.967 9.532a.747.747 0 0 0-.841.302l-.876 1.314-.876-1.314A.75.75 0 0 0 12 10.25V9.5H6v2.25H4.5V9.5H3v6h1.5v-2.25H6v2.25h1.5V11H9v4.5h1.5V11H12v4.5h1.5v-2.773l.126.189c.278.417.97.417 1.248 0l.126-.189V15.5h1.5v-5.25a.752.752 0 0 0-.533-.718z" />
    </G>
  </Svg>
);

export default SvgComponent;
