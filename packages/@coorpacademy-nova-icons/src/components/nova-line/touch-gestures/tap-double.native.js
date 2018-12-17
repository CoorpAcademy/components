import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.316 15.052L15 14.279V11a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5H9a1 1 0 0 0-.929 1.372l2 5c.152.379.52.628.929.628h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-.684-.948zM16 21h-4.323l-1.2-3H11a1 1 0 0 0 1-1v-5h1v3a1 1 0 0 0 .684.949l2.316.772V21z" />
      <Path d="M12.5 5a7.464 7.464 0 0 0-7.308 5.808l1.948.45C7.719 8.751 9.923 7 12.5 7s4.781 1.751 5.36 4.258l1.948-.45A7.465 7.465 0 0 0 12.5 5z" />
      <Path d="M12.5 1A11.52 11.52 0 0 0 1.658 8.657l1.885.668A9.517 9.517 0 0 1 12.5 3a9.514 9.514 0 0 1 8.963 6.343l1.887-.664A11.52 11.52 0 0 0 12.5 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
