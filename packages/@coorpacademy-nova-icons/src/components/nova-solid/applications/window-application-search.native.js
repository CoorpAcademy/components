import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v2.002h20V2zM3 3a1 1 0 1 1-.002-1.998A1 1 0 0 1 3 3zm3 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 6 3zM7 10.003h5.408a6.953 6.953 0 0 1 3.592-1h-2v-2h4v2h-2c1.488 0 2.865.468 4 1.26V5.002H0V16a2 2 0 0 0 2 2h7.293A6.97 6.97 0 0 1 9 16.003c0-.341.033-.673.08-1H8v-2h1.683c.167-.35.357-.684.577-1H7v-2zm1-3h4v2H8v-2zm-6 3h3v2H2v-2zm4 5H2v-2h4v2zm0-6H2v-2h4v2z" />
      <Path d="M20.167 18.756c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.417l1.414-1.414-3.247-3.247zM16 19.003c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
