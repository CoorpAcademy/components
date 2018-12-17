import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM10 19H7v-2h3v2zm0-3H7v-2h3v2zm0-3H7v-2h3v2zm7 6h-5v-8h5v8zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
