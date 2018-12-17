import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 17.286c-1.176.396-2.851.714-5 .714-4.547 0-7-1.42-7-2v-1.4c1.736.922 4.374 1.4 7 1.4 1.754 0 3.508-.218 5-.635v-2.079c-1.176.396-2.851.714-5 .714-4.547 0-7-1.42-7-2v-1.4c1.736.922 4.374 1.4 7 1.4s5.264-.478 7-1.4V12h2V4c0-2.626-4.527-4-9-4S0 1.374 0 4v12c0 2.626 4.527 4 9 4 1.752 0 3.507-.214 5-.628v-2.086zM9 2c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2zM2 6.6C3.736 7.522 6.374 8 9 8s5.264-.478 7-1.4V8c0 .58-2.453 2-7 2S2 8.58 2 8V6.6zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
