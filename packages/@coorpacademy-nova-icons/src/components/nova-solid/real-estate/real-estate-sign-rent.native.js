import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4.875 7.25H4.25V8.5h.625a.625.625 0 1 0 0-1.25z" />
      <Path d="M21 4H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8v8h2v-8h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.75 11H5.303l-.73-1.25H4.25V11H3V6h1.875c1.034 0 1.875.841 1.875 1.875 0 .674-.36 1.261-.894 1.592L6.75 11zM8 10.375v-3.75C8 6.279 8.28 6 8.625 6h3.125v1.25h-2.5v.625h1.875v1.25H9.25v.625h2.5V11H8.625A.625.625 0 0 1 8 10.375zm8.75 0a.626.626 0 0 1-.625.625.623.623 0 0 1-.519-.278L14.25 8.69V11H13V6.625a.626.626 0 0 1 1.145-.347L15.5 8.311V6h1.25v4.375zm5-3.125H20.5V11h-1.25V7.25H18V6h3.75v1.25z" />
    </G>
  </Svg>
);

export default SvgComponent;
