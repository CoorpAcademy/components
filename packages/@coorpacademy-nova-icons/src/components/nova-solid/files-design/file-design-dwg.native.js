import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.25 15.5v3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM15 2l5 5h-5V2zM5.25 20h-1.5v-6h1.5c1.654 0 3 1.346 3 3s-1.346 3-3 3zm7.473 0l-.733-2.987c-.024.098-.748 2.894-.724 2.987H9.723L8.25 14h1.5l.739 2.926.718-2.926h1.543l.739 2.926.718-2.926h1.543c-.023.094-1.509 5.907-1.484 6h-1.543zm7.527-4.5h-3v3h1.5v-.75H18v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
