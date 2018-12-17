import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16 5h-5c-.316 0-.635.02-.964.062L6.64 2.232A1 1 0 0 0 5 3v4.714A8.042 8.042 0 0 0 3.587 10H1c-.552 0-1 .449-1 1v5a1 1 0 0 0 1 1h3.08A8.05 8.05 0 0 0 8 20.403V23h2v-2.067c.33.042.663.067 1 .067h5c.34 0 .672-.028 1-.069V23h2v-2.589c2.928-1.19 5-4.062 5-7.411 0-4.41-3.589-8-8-8zm-9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10-2h-6V7h6v2z"
    />
  </Svg>
);

export default SvgComponent;
