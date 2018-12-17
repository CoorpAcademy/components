import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M22 13v-2h-4V8.414l1.707-1.708A.992.992 0 0 0 20 6V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3c0 .266.105.52.293.707L4 8.414V11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1v2h2v-2h7.557c.693 1.19 1.97 2 3.443 2 2.205 0 4-1.794 4-4 0-1.858-1.279-3.41-3-3.858V13h4zM8 4h2v1.586l-1 1-1-1V4zm4 0h2v1.586l-1 1-1-1V4zm6 1.586l-1 1-1-1V4h2v1.586zM4 4h2v1.586l-1 1-1-1V4zm2 4.414l1-1 1.293 1.292a.999.999 0 0 0 1.414 0L11 7.414l1.293 1.292a.999.999 0 0 0 1.414 0L15 7.414l1 1V11H6V8.414zM13 18H5v-5h11v1.142c-1.721.448-3 2-3 3.858zm6 0c0 1.103-.896 2-2 2s-2-.897-2-2a2 2 0 0 1 4 0z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
