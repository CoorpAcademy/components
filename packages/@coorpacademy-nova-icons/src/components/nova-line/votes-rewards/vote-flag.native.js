import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 2.001h2v20H3zM20 6.001h-5v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-12-2h5v8H8v-8zm11 12h-6l1.8-2.4-.014-.01a.973.973 0 0 0 .214-.59v-5h4v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
