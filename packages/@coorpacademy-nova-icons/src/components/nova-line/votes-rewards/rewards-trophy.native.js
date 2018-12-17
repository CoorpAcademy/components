import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M21 3.001h-3.278c-.347-.595-.984-1-1.722-1H8c-.737 0-1.375.405-1.722 1H3a1 1 0 0 0-1 1V7.04c0 .916.41 1.77 1.126 2.343l4.179 3.343A6 6 0 0 0 11 14.911v2.09H9a1 1 0 0 0-1 1v2H7v2h10v-2h-1v-2a1 1 0 0 0-1-1h-2v-2.09a5.998 5.998 0 0 0 3.695-2.186l4.18-3.344A2.981 2.981 0 0 0 22 7.04V4.001a1 1 0 0 0-1-1zm-7 17h-4v-1h4v1zM4.376 7.821A.994.994 0 0 1 4 7.04V5.001h2v4c0 .042.006.083.006.125l-1.63-1.305zM12 13.001c-2.205 0-4-1.794-4-4v-5h8v5c0 2.206-1.795 4-4 4zm8-5.961a.996.996 0 0 1-.375.781l-1.631 1.305c0-.042.006-.083.006-.125v-4h2V7.04z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
