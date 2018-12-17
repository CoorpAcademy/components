import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.316 17.052L15 16.279V10h-2v5.612l-1-.333V11h-2v7H9a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM16 22h-4.382l-1-2H11a1 1 0 0 0 1-1v-1.612l4 1.333V22z" />
      <Path d="M12.496 5a7.463 7.463 0 0 0-7.308 5.808l1.949.449C7.716 8.751 9.919 7 12.496 7s4.781 1.751 5.36 4.258l1.948-.45A7.464 7.464 0 0 0 12.496 5z" />
      <Path d="M12.496 1A11.52 11.52 0 0 0 1.655 8.657l1.885.668A9.518 9.518 0 0 1 12.496 3a9.513 9.513 0 0 1 8.963 6.343l1.887-.664A11.517 11.517 0 0 0 12.496 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
