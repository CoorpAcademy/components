import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.942 11a9.011 9.011 0 0 0-7.941-7.94V1h-2v2.06A9.011 9.011 0 0 0 3.06 11H1.001v2H3.06a9.013 9.013 0 0 0 7.941 7.941V23h2v-2.059A9.014 9.014 0 0 0 20.942 13h2.059v-2h-2.059zM11.95 8a2 2 0 1 1-.001 4.001A2 2 0 0 1 11.95 8zm-3 8c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
    />
  </Svg>
);

export default SvgComponent;
