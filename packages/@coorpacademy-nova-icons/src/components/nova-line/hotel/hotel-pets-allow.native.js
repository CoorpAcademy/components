import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M18 11V4a1 1 0 0 0-1.64-.767L10.566 8.06l-4.85.828A2.008 2.008 0 0 0 4 10.867V13c0 1.103.897 2 2 2h4.181L9.02 20.804A.998.998 0 0 0 10 22h8a1 1 0 0 0 .995-1.1L18 11zM6 13l.026-2.137 5.142-.877a1 1 0 0 0 .472-.218L16 6.135l.005 4.964.59 5.9H11.82l.561-2.804A.998.998 0 0 0 11.4 13H6zm5.22 7l.2-1h5.375l.1 1H11.22z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
