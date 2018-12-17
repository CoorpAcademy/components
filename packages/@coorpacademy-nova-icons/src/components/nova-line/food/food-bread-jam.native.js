import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M15.277 15.277l.59 4.723H6.133l.859-6.876A.996.996 0 0 0 6 12c-1.443 0-3-1.529-3-4 0-2.206 1.795-4 4-4h8c2.205 0 4 1.794 4 4 0 .324-.029.63-.08.92l1.607 1.606A6.917 6.917 0 0 0 21 8c0-3.309-2.691-6-6-6H7C3.691 2 1 4.691 1 8c0 3.136 1.858 5.261 3.887 5.841l-.879 7.035A.999.999 0 0 0 5 22h12a.999.999 0 0 0 .992-1.124l-.412-3.294-2.303-2.305z" />
      <Path d="M10 17a2 2 0 0 0 4 0v-1l-6-6v5a2 2 0 0 0 2 2zM11.867 5.293a.998.998 0 0 0-.938-.266c-.336.08-.608.328-.719.657-.049.146-1.156 3.626 2.242 7.023 1.585 1.585 3.395 1.333 4.614.615l4.386 4.385 1.414-1.414-10.999-11zm2 6c-1.037-1.036-1.52-2.057-1.729-2.899l3.431 3.43c-.477.138-1.077.093-1.702-.531z" />
    </G>
  </Svg>
);

export default SvgComponent;
