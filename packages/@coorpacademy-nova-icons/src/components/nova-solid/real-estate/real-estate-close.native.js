import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zm-6 7l-1.414 1.413L12 18.414l-2.293 2.292-1.414-1.413L10.586 17l-2.293-2.293 1.414-1.413L12 15.586l2.293-2.293 1.414 1.413L13.414 17l2.293 2.293z"
    />
  </Svg>
);

export default SvgComponent;
