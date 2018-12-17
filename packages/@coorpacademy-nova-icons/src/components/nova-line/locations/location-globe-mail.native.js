import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6.279 10l1.109 3.329 1.897-.633L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3v3h2V6h-3V2.069c3.94.495 7 3.859 7 7.931 0 .275-.014.548-.041.815l1.99.2c.033-.333.051-.672.051-1.015 0-5.514-4.486-10-10-10S0 4.486 0 10c0 4.704 3.2 8.715 7.782 9.753l.442-1.95A7.956 7.956 0 0 1 2 10c0-2.021.759-3.864 2-5.274V10h2.279z" />
      <Path d="M22 13H12c-1.103 0-2 .898-2 2v7c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-7c0-1.102-.897-2-2-2zm-1.762 2L17 17.699 13.762 15h6.476zM12 22v-5.865l5 4.167 5-4.167.001 5.865H12z" />
    </G>
  </Svg>
);

export default SvgComponent;
