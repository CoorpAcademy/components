import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.914 9c-.375-2.253-2.039-4.325-5.223-4.864l.189-1.886 2.878.72.484-1.941-4-1a.998.998 0 0 0-1.237.87l-.311 3.112C7.635 4.123 5.539 6.41 5.096 9H4v2h16V9h-1.086zM7.121 9c.416-1.77 1.98-2.838 4.371-2.973L11.195 9H7.121zm6.084 0l.285-2.857c1.856.346 3.065 1.355 3.406 2.857h-3.691zM11.995 21.099l-1.99-.199.89-8.9H5.15l.852 11.078c.041.519.475.922.998.922h10a1 1 0 0 0 .997-.922L18.847 12h-5.941l-.911 9.099z" />
    </G>
  </Svg>
);

export default SvgComponent;
