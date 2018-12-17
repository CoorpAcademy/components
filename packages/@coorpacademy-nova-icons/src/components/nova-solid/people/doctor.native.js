import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 20c0-3.533-3.29-6-8-6-4.711 0-8 2.467-8 6v4h16v-4zm-3 0h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zM12 13c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5zM16.885 4A5.067 5.067 0 0 0 16 2.031V2h-.025C15.061.793 13.627 0 12 0S8.939.793 8.025 2H8v.031A5.053 5.053 0 0 0 7.115 4H6v2h3.184C9.597 7.162 10.695 8 12 8s2.403-.838 2.816-2H18V4h-1.115zM12 6.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 6.5z"
    />
  </Svg>
);

export default SvgComponent;
