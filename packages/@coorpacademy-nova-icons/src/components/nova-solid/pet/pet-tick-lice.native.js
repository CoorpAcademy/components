import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 11V9h-3.357a5.854 5.854 0 0 0-.451-.977L20 6.619V3h-2v2.382L15.883 6.44a5.978 5.978 0 0 0-1.34-.868C14.014 6.426 13.076 7 12 7s-2.014-.574-2.543-1.427a5.986 5.986 0 0 0-1.34.867L6 5.382V3H4v3.619l2.809 1.403c-.179.31-.331.637-.452.978H3v2h3c0 .702.127 1.373.349 2H3v2h4.537c.165.186.341.359.527.521L6 17.586V21h2v-2.586l1.826-1.826c.675.263 1.406.412 2.174.412s1.499-.149 2.174-.412L16 18.414V21h2v-3.414l-2.064-2.064c.187-.162.362-.336.527-.521H21v-2h-3.349A5.985 5.985 0 0 0 18 11h3z" />
      <Circle cx={12} cy={4} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
