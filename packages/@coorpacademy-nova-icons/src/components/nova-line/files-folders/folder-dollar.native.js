import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.8 10h-1.6v.841c-.912.185-1.6.993-1.6 1.959 0 1.103.897 2 2 2h.8a.4.4 0 0 1 0 .8H9.6v1.6h1.6v.8h1.6v-.84a2.004 2.004 0 0 0 1.601-1.959c0-1.103-.897-2-2-2H11.6a.4.4 0 0 1 0-.8h2.8v-1.6h-1.6V10z" />
      <Path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
