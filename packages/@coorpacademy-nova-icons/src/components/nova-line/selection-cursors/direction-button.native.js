import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M16 23.001H8.018a1 1 0 0 1-1-1v-5H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5.018v-5a1 1 0 0 1 1-1H16a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1zm-6.982-2H15v-5a1 1 0 0 1 1-1h5v-6h-5a1 1 0 0 1-1-1v-5H9.018v5a1 1 0 0 1-1 1H3v6h5.018a1 1 0 0 1 1 1v5z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M12 4.001l-2 3h4zM5 12.001l3 2v-4zM12 20.001l2-3h-4zM19 12.001l-3-2v4z"
    />
  </Svg>
);

export default SvgComponent;
