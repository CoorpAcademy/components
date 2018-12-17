import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM8.875 16.25h-1.25V20h-1.25v-3.75h-1.25V15h3.75v1.25zM10.75 20H9.5v-5h1.25v5zm8.125-3.75h-2.5v.625h1.875v1.25h-1.875V20h-1.25v-3.75h-2.5v.625H14.5v1.25h-1.875V20h-1.25v-3.75c0-.689.561-1.25 1.25-1.25h2.5v1.25c0-.689.561-1.25 1.25-1.25h2.5v1.25zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
