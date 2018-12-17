import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.707 4.708L12 .001 7.293 4.708l1.414 1.415L11 3.83v8.586h2V3.83l2.293 2.293z"
    />
    <Path
      d="M22.633 21.736L21 16.838V8.001a1 1 0 0 0-1-1h-3v2h2v7H5v-7h2v-2H4a1 1 0 0 0-1 1v8.837l-1.633 4.897c-.186.557-.109 1.129.208 1.57s.837.696 1.425.696h18c.588 0 1.107-.254 1.425-.695s.393-1.014.208-1.57zm-19.245.265l1.333-4H19.28l1.333 4H3.388z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M10 19.001h4v2h-4z" />
  </Svg>
);

export default SvgComponent;
