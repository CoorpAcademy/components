import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 10l-1 2-1-2H9l2 4H9v2h2v1H9v2h2v1h2v-1h2v-2h-2v-1h2v-2h-2l2-4z" />
      <Path d="M16.874 7.445l2.323-.465-.393-1.961-3.465.693 2.519-4.197A1 1 0 0 0 16.629.071L12 1.922 7.372.071a1.003 1.003 0 0 0-1.133.281.999.999 0 0 0-.096 1.163l2.519 4.197-3.466-.693-.392 1.961 2.323.465C4.647 9.049 3 11.833 3 15c0 4.962 4.038 9 9 9s9-4.038 9-9c0-3.167-1.647-5.951-4.126-7.555zm-5.246-3.517c.239.095.504.095.743 0l2.244-.897L13.434 5h-2.867L9.385 3.031l2.243.897zM12 22c-3.86 0-7-3.139-7-7 0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
