import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M17.971 1.201l-1.414 1.414 3.535 3.535-1.414 1.416-3.536-3.537-1.414 1.414 3.536 3.536-1.414 1.414-3.536-3.535L10.9 8.272l3.359 3.358-4.208.601a.992.992 0 0 0-.565.283L1 21l1.414 1.414 8.25-8.249 4.621-.661a.986.986 0 0 0 .565-.283l6.363-6.364a1 1 0 0 0 0-1.415l-4.242-4.241z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
