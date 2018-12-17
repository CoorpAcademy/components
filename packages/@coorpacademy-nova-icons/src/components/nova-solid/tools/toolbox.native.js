import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M21 5.999h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1.001zM10 4h4v2h-4V4zm6 12a2.988 2.988 0 0 1-2.816-2h-2.367c-.413 1.163-1.512 2-2.817 2s-2.403-.836-2.816-2H8v-2H5.184A2.993 2.993 0 0 1 8 10c1.305 0 2.402.838 2.816 2h2.367a2.994 2.994 0 0 1 2.816-2c1.305 0 2.402.838 2.816 2H16v2h2.816A2.988 2.988 0 0 1 16 16z"
    />
  </Svg>
);

export default SvgComponent;
