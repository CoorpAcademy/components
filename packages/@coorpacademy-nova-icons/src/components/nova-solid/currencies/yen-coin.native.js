import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm3 12h-2v3h-2v-3H9v-2h1.882L9.106 8.451l1.789-.895L12 9.768l1.106-2.212 1.789.895-1.776 3.552H15v2z"
    />
  </Svg>
);

export default SvgComponent;
