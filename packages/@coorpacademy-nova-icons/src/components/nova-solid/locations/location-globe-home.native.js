import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4 13V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 4.852 3.457 8.894 8.04 9.805A9.29 9.29 0 0 1 8 19c0-1.142.221-2.229.609-3.234L4 13zM17 10c1.044 0 2.042.186 2.974.514.009-.172.026-.341.026-.514 0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1-.883 2.207A8.979 8.979 0 0 1 17 10zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.413L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.292 1.414-1.413-6-6zM18 22h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
