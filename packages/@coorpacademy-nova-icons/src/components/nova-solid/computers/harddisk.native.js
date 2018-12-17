import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.295 16.991a1.72 1.72 0 1 1-3.151-1.38C8.526 14.742 12.479 10 12.479 10s-.802 6.121-1.184 6.991z"
    />
    <Path
      fill="currentColor"
      d="M18 3H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.59-3.174c-.099.427-.194.766-.283.968a3.72 3.72 0 0 1-4.899 1.916 3.725 3.725 0 0 1-1.916-4.899c.084-.193.266-.483.492-.818A5.98 5.98 0 0 1 6 11a6 6 0 0 1 12 0 5.997 5.997 0 0 1-4.59 5.826z"
    />
  </Svg>
);

export default SvgComponent;
