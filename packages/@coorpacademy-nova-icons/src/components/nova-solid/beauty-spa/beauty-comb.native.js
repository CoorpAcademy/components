import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M21.949 6.949L17 2l-1.414 1.414 3.535 3.535-1.415 1.416-3.536-3.537-1.414 1.415 3.536 3.534-1.414 1.415-3.536-3.535-1.413 1.414 3.536 3.535-1.415 1.415-3.535-3.535L7.101 11.9l3.535 3.536-1.414 1.414-3.536-3.535-1.414 1.413 3.536 3.536-1.414 1.414-3.535-3.535-1.414 1.415 4.949 4.949a2 2 0 0 0 2.829 0L21.949 9.778a2 2 0 0 0 0-2.829z"
    />
  </Svg>
);

export default SvgComponent;
