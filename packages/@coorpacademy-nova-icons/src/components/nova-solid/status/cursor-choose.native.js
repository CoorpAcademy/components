import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.238 16.02l-4.196-.839V11a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5h-2a1.001 1.001 0 0 0-.895 1.448l3 6a1 1 0 0 0 .895.552h7a1 1 0 0 0 1-1v-6a1 1 0 0 0-.804-.98zM23.749 2.707l-1.415-1.414-3.292 3.293-3.294-3.293-1.413 1.414L17.627 6l-3.292 3.293 1.413 1.414 3.294-3.293 3.292 3.293 1.415-1.414L20.456 6zM5.293 10.369L1.487 7.832l1.109-1.664 2.195 1.463 4.436-6.212 1.629 1.163z"
    />
  </Svg>
);

export default SvgComponent;
