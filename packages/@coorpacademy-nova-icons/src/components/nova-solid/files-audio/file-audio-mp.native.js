import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.75 15.507H12v1.5h.75a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-6.664 19h-1.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0l-.126-.189v2.772h-1.5v-5.25a.749.749 0 0 1 1.374-.416l.876 1.315.876-1.314a.75.75 0 0 1 1.374.416v5.25zm3-1.5H12v1.5h-1.5v-6h2.25c1.24 0 2.25 1.01 2.25 2.25 0 1.241-1.01 2.25-2.25 2.25zm6 .75a.75.75 0 0 1-.75.75h-2.25v-1.5h1.5v-.75h-1.5v-1.5h1.5v-.75h-1.5v-1.5H18a.75.75 0 0 1 .75.75v4.5zM15 7.007v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
