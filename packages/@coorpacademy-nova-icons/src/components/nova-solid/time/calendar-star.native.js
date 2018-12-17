import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2zm-5.5 15L12 15.502 8.5 18l1.5-4.003L7 12h3.5l1.507-4 1.493 4H17l-3 1.997L15.5 18z"
    />
  </Svg>
);

export default SvgComponent;
