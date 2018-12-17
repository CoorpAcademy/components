import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.875 17.757H6.75v.75h1.125a.375.375 0 0 0 0-.75zM7.875 15.507H6.75v.75h1.125a.375.375 0 0 0 0-.75z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9.75 18.132a1.877 1.877 0 0 1-1.875 1.875H5.25v-6h2.625c1.034 0 1.875.841 1.875 1.875 0 .424-.146.811-.385 1.125.239.313.385.701.385 1.125zm3.75-2.625h-.75v3h.75v1.5h-3v-1.5h.75v-3h-.75v-1.5h3v1.5zm5.25 3.75a.752.752 0 0 1-1.374.416l-1.626-2.438v2.772h-1.5v-5.25a.75.75 0 0 1 1.374-.416l1.626 2.439v-2.773h1.5v5.25zM15 7.007v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
