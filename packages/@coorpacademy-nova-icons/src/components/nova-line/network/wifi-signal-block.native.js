import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.607 18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.345-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM5.951 15.344l1.414 1.414A5.96 5.96 0 0 1 11.607 15c1.602 0 3.109.625 4.242 1.758l1.414-1.414C15.753 13.833 13.744 13 11.607 13s-4.146.833-5.656 2.344zM11 5.029C6.955 5.18 3.17 6.809.293 9.688l1.414 1.414c2.5-2.5 5.781-3.923 9.293-4.072V5.029zM18 0c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.216 2.02.567L14.566 8.02A3.96 3.96 0 0 1 14 6c0-2.205 1.795-4 4-4zm0 8c-.74 0-1.424-.215-2.02-.566l5.453-5.452C21.785 4.576 22 5.261 22 6c0 2.206-1.795 4-4 4zM11 9.035c-2.867.145-5.693 1.295-7.878 3.479l1.414 1.414A9.951 9.951 0 0 1 11 11.035v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
