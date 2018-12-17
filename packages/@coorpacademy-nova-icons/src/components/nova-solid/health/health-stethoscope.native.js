import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M22 7c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.838 2.401 2 2.815v9.184a1.001 1.001 0 0 1-2 0c0-1.654-1.346-3-3-3s-3 1.346-3 3a.5.5 0 0 1-1 0V15.91c2.833-.478 5-2.942 5-5.911V4a1 1 0 0 0-1-1h-2V2H9v4h2V5h1v4.998c0 2.207-1.795 4-4 4s-4-1.793-4-4V5h1v1h2V2H5v1H3a1 1 0 0 0-1 1v5.998c0 2.968 2.167 5.433 5 5.911v3.089c0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5c0-.55.449-1 1-1s1 .45 1 1c0 1.655 1.346 3 3 3s3-1.345 3-3V9.815A2.993 2.993 0 0 0 22 7zm-3 .998c-.551 0-1-.448-1-.998s.449-1 1-1 1 .449 1 1-.449.998-1 .998z"
    />
  </Svg>
);

export default SvgComponent;
