import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zm-4.859 14H7a.998.998 0 0 1-.857-1.514l3-5.001c.361-.603 1.354-.603 1.715 0l2.849 4.748A3.98 3.98 0 0 0 11.555 15zM15 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-13V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
