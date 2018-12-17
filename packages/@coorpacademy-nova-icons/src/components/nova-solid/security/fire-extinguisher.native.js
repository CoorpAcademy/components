import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24.001v24.001H.001z" />
    <G fill="currentColor">
      <Path d="M11 6.001h1v-2h-.838L5.317 2.052l-.633 1.899 2.88.96a7 7 0 0 0-3.563 6.09v7h2v-7c0-2.757 2.243-5 4.999-5zM19.634 2.227a.999.999 0 0 0-.83-.207l-5 1a1 1 0 0 0-.804.981v2a1 1 0 0 0 .804.981l5 1A.998.998 0 0 0 20 7.001v-4c0-.3-.134-.583-.366-.774z" />
      <Path d="M11 7.001c-2.205 0-4 1.794-4 4v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10c0-2.206-1.794-4-4-4zm3 11h-3v-6h3v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
