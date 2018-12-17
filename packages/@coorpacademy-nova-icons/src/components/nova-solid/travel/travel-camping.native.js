import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M21.848 20.47L12.903 7.438l2.954-4.924-1.715-1.029L12 5.056l-2.143-3.57-1.714 1.029 2.954 4.923L2.152 20.47A1 1 0 0 0 3 22h6v-2a3 3 0 1 1 6 0v2h6a1.002 1.002 0 0 0 .848-1.53z"
    />
  </Svg>
);

export default SvgComponent;
