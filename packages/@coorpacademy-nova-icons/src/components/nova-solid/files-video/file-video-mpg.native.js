import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15.5h-.75V17H12a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0L6 17.228V20H4.5v-5.25a.75.75 0 0 1 1.374-.416l.876 1.314.876-1.314A.75.75 0 0 1 9 14.75V20zm3-1.5h-.75V20h-1.5v-6H12c1.24 0 2.25 1.01 2.25 2.25S13.24 18.5 12 18.5zm7.5-3h-3v3H18v-.75h-.75v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
