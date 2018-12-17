import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9.75 15.5h-3v3h1.5v-.75H7.5v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5zm3.75 0h-.75v3h.75V20h-3v-1.5h.75v-3h-.75V14h3v1.5zm5.25 0h-3v.75H18v1.5h-2.25V20h-1.5v-4.5c0-.827.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
