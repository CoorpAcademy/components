import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-12 4.667H7.666a.333.333 0 1 0 0 .666h.667A1.67 1.67 0 0 1 10 14a1.67 1.67 0 0 1-1.334 1.633v.7H7.333v-.666H6v-1.334h2.333a.333.333 0 1 0 0-.666h-.667A1.668 1.668 0 0 1 6 12a1.67 1.67 0 0 1 1.333-1.633v-.7h1.333v.666H10v1.334zM15 17h-2v-5h2v5zm3 0h-2v-7h2v7zm2-11H4V5h16v1z"
    />
  </Svg>
);

export default SvgComponent;
