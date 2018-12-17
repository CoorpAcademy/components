import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 6H2v15a1 1 0 0 0 1 1h15v-2H4V6z" />
      <Path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 14H8V4h12v12z" />
      <Path d="M18 7.018V7h-8v.018l4 2.399z" />
      <Path d="M18 8.184l-3.742 2.246c-.08.048-.169.07-.258.07s-.178-.022-.258-.071L10 8.184V13h8V8.184z" />
    </G>
  </Svg>
);

export default SvgComponent;
