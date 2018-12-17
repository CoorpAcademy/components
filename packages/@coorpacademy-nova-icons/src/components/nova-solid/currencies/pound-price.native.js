import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 7.435V5.003c0-.551-.448-1-1-1H4c-.552 0-1 .449-1 1v2.432a4.99 4.99 0 0 0-3 4.568 4.988 4.988 0 0 0 3 4.568v2.432a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432a4.99 4.99 0 0 0 3-4.568 4.99 4.99 0 0 0-3-4.568zm-8 3.568v2h-2v2h4v2H8v-2h1v-2H8v-2h1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3h-2c0-.551-.449-1-1-1s-1 .449-1 1v1h2z"
    />
  </Svg>
);

export default SvgComponent;
