import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 7.435V5.003c0-.551-.448-1-1-1H4c-.552 0-1 .449-1 1v2.432a4.99 4.99 0 0 0-3 4.568 4.988 4.988 0 0 0 3 4.568v2.432a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432a4.99 4.99 0 0 0 3-4.568 4.99 4.99 0 0 0-3-4.568zm-6 6.568h-2v3h-2v-3H9v-2h1.882L9.106 8.451l1.789-.895L12 9.768l1.106-2.212 1.789.895-1.776 3.552H15v2z"
    />
  </Svg>
);

export default SvgComponent;
