import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.5 12.001a3.5 3.5 0 0 0-3.5 3.5v8.5h7v-8.5a3.5 3.5 0 0 0-3.5-3.5zm1.5 5h-3v-1.5a1.5 1.5 0 1 1 3 0v1.5zM7 5.001H5v-2l-3 3 3 3v-2h2z" />
      <Path d="M18.835 13.066c-.656-2.895-3.245-5.065-6.335-5.065s-5.679 2.17-6.335 5.065l1.864 1.864A4.084 4.084 0 0 1 8 14.501c0-2.482 2.019-4.5 4.5-4.5s4.5 2.018 4.5 4.5c0 .144-.014.286-.029.429l1.864-1.864z" />
    </G>
  </Svg>
);

export default SvgComponent;
