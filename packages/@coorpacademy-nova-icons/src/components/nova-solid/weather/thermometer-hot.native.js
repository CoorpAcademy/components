import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 5.002a3 3 0 1 0-6 0v9.168a4.472 4.472 0 0 0-1.5 3.332 4.5 4.5 0 0 0 9 0A4.472 4.472 0 0 0 10 14.17V5.002zm-3 15a2.5 2.5 0 0 1-1-4.789V9.002h2v6.211a2.5 2.5 0 0 1-1 4.789zM13 3.002h2v3h-2zM19.657 4.931l1.414 1.414-2.121 2.121-1.415-1.414zM20 11.003h3v2h-3zM19.656 19.074l-2.12-2.121 1.413-1.414 2.121 2.121zM12.999 18.004h2v2.999h-2zM14 8.002c-.732 0-1.41.211-2 .555v6.89c.59.343 1.268.555 2 .555a4 4 0 0 0 0-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
