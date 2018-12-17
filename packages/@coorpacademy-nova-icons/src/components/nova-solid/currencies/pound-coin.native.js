import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm1 9v2h-2v2h4v2H8v-2h1v-2H8v-2h1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3h-2c0-.551-.449-1-1-1s-1 .449-1 1v1h2z"
    />
  </Svg>
);

export default SvgComponent;
