import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M21.94 20.659l-4-11a1.002 1.002 0 0 0-.723-.636 1.003 1.003 0 0 0-.924.27L13.5 12.086 10.914 9.5l.793-.794a.999.999 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-3 3a.999.999 0 0 0 0 1.414l5 5a.994.994 0 0 0 1.414.001l.793-.793 2.586 2.586-2.793 2.792a1.001 1.001 0 0 0 .365 1.648l11 4a1.001 1.001 0 0 0 1.282-1.281z"
    />
  </Svg>
);

export default SvgComponent;
