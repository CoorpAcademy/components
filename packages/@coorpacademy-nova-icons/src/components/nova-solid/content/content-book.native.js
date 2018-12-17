import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 4.001h-4a.997.997 0 0 0-.707.293L12 5.586l-1.293-1.293A1 1 0 0 0 10 4.001H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.586l1.707 1.707a.997.997 0 0 0 1.414-.001L14.414 15H18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-.999z"
    />
    <Path
      fill="currentColor"
      d="M12 21a.995.995 0 0 1-.6-.2L7.666 18H3a1 1 0 0 1-1-1V6h2v10h4c.217 0 .427.07.6.2l3.4 2.55 3.4-2.55c.173-.13.383-.2.6-.2h4V6h2v11a1 1 0 0 1-1 1h-4.666L12.6 20.8a.995.995 0 0 1-.6.2z"
    />
  </Svg>
);

export default SvgComponent;
