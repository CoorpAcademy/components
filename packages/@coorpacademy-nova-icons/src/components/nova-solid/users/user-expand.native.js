import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.001 2h-16c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-8 5A2 2 0 1 1 12 11.001 2 2 0 0 1 12 7zM8.415 20H4.001v-4.414l1.5 1.5 1.793-1.793 1.414 1.414L6.915 18.5l1.5 1.5zM7.294 8.707L5.501 6.914l-1.5 1.5V4h4.414l-1.5 1.5 1.793 1.793-1.414 1.414zM9.001 15c0-1.841 1.159-3 3-3s3 1.159 3 3h-6zm11 5h-4.414l1.5-1.5-1.793-1.793 1.414-1.414 1.793 1.793 1.5-1.5V20zm0-11.586l-1.5-1.5-1.793 1.793-1.414-1.414L17.087 5.5l-1.5-1.5h4.414v4.414z"
    />
  </Svg>
);

export default SvgComponent;
