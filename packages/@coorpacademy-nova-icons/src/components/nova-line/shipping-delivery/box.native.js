import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21.406 6.087l-9-4a1.001 1.001 0 0 0-.813 0l-9 4A1 1 0 0 0 2 7v10a1 1 0 0 0 .594.914l9 4a.987.987 0 0 0 .812 0l9-4A.998.998 0 0 0 22 17V7a1 1 0 0 0-.594-.913zM12 4.095L18.538 7l-1.788.795-6.538-2.905L12 4.095zm0 5.812L5.462 7 7.75 5.983l6.538 2.906L12 9.907zM4 8.54l7 3.111v7.812l-7-3.111V8.54zm9 10.922V11.65l7-3.111v7.811l-7 3.112z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
