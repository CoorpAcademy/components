import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM16 17.01c0 1.105-1.791 2-4 2s-4-.895-4-2v-.385c.779.519 2.05.885 4 .885s3.221-.366 4-.885v.385zm0-2c0 .723-1.252 1.5-4 1.5s-4-.777-4-1.5v-1.385c.779.519 2.05.885 4 .885s3.221-.366 4-.885v1.385zm-4-1.5c-2.748 0-4-.777-4-1.5 0-1.104 1.791-2 4-2s4 .896 4 2c0 .722-1.252 1.5-4 1.5zm3-6.503v-5l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
