import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      d="M9 12H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.568 0 1.129.167 1.619.482a1 1 0 0 0 1.516-.615A4.973 4.973 0 0 1 13 2c2.757 0 5 2.243 5 5 0 1.642-.806 3.088-2.031 4h2.768A6.962 6.962 0 0 0 20 7c0-3.859-3.141-7-7-7a6.962 6.962 0 0 0-6.438 4.254A4.924 4.924 0 0 0 5 4C2.243 4 0 6.243 0 9s2.243 5 5 5h4v-2z"
      fill="currentColor"
    />
    <Path
      d="M23 24H12a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3c.266 0 .52.105.707.293L17.414 15H23a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm-10-2h9v-5h-5a.996.996 0 0 1-.707-.293L14.586 15H13v7z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
