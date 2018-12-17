import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M22 8.999v-2h-2v-4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4H2v2h1v7H2v2h1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3h1v-2h-1v-1c0-1.103.897-2 2-2s2 .897 2 2v1h-1v2h1l.001 3a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-3h1v-2h-1v-7h1zm-16-5h12v3H6v-3zm2 16H5v-2h3v2zm11 0h-2.999v-2H19v2zm0-4h-3v-1c0-2.205-1.794-4-4-4s-4 1.795-4 4v1H5v-7h14v7z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
