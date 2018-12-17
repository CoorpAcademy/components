import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 11c.549 0 1.082.07 1.595.189A6.952 6.952 0 0 0 20 7c0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.965.458 1.996 1.263 2.97 2.647l-.817.576C7.678 4.454 6.393 4 5 4 2.243 4 0 6.243 0 9s2.243 5 5 5h6.26A6.987 6.987 0 0 1 17 11zM17 12l1.714 4.286H23l-3.708 3.13L21.285 24 17 21.166 12.714 24l1.994-4.584L11 16.286h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
