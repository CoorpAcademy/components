import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.25 16.25v2.5a1.251 1.251 0 0 0 0-2.5zM17 16.25v2.5a1.25 1.25 0 0 0 0-2.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM7 16.25h-.625v2.5H7V20H4.5v-1.25h.625v-2.5H4.5V15H7v1.25zm4.375 3.125a.626.626 0 0 1-.625.625.623.623 0 0 1-.519-.277l-1.356-2.032V20h-1.25v-4.375a.625.625 0 0 1 1.144-.347l1.356 2.033V15h1.25v4.375zM17 20h-1.25v-2.5c0 1.379-1.121 2.5-2.5 2.5H12v-5h1.25c1.379 0 2.5 1.123 2.5 2.5V15H17c1.379 0 2.5 1.123 2.5 2.5 0 1.379-1.121 2.5-2.5 2.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
