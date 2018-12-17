import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21 21.999H3c-1.103 0-2-.896-2-2v-16c0-1.104.897-2 2-2h18c1.103 0 2 .896 2 2v16c0 1.104-.897 2-2 2zm-18-18v16h18.001l-.001-16H3z"
      fill="currentColor"
    />
    <Path
      d="M14 16.999H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.719l2.757-.689a1 1 0 0 1 1.243.97v6a.997.997 0 0 1-.385.788.997.997 0 0 1-.858.183L15 15.28v.719a1 1 0 0 1-1 1zm-7-2h6v-1c0-.309.142-.599.385-.788s.561-.257.858-.183l2.757.69V10.28l-2.757.689a1.01 1.01 0 0 1-.858-.183.993.993 0 0 1-.385-.787v-1H7v6z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
