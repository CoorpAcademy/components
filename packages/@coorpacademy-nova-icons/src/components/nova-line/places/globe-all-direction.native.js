import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 3.999c-4.411 0-8 3.589-8 8 0 4.412 3.589 8 8 8s8-3.588 8-8c0-4.411-3.589-8-8-8zm4.459 4H16V7.54c.161.146.314.298.459.459zM14 6.349v1.649h-4V6.349c.627-.223 1.298-.351 2-.351s1.373.128 2 .351zm0 3.65v4h-4v-4h4zM8 7.54v.459h-.46c.145-.161.298-.313.46-.459zM6.35 9.999H8v4H6.35a5.942 5.942 0 0 1-.35-2c0-.701.127-1.374.35-2zm1.19 6H8v.46a5.872 5.872 0 0 1-.46-.46zm2.46 1.65v-1.65h4v1.65c-.627.223-1.298.35-2 .35s-1.374-.127-2-.35zm6-1.191v-.46h.459a5.693 5.693 0 0 1-.459.46zm1.649-2.459H16v-4h1.65c.223.627.35 1.3.35 2 0 .702-.128 1.374-.351 2zM12-.001l-3 3h6zM21 8.999v6l3-3zM12 23.999l3-3H9zM3 14.999v-6l-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
