import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm2 4h2v4h-2V6zM8 6h2v4H8V6zm10 10h-1v2h-2v-2h-2v2h-2v-2H9v2H7v-2H6v-2h1v-2h2v2h2v-2h2v2h2v-2h2v2h1v2z"
    />
  </Svg>
);

export default SvgComponent;
