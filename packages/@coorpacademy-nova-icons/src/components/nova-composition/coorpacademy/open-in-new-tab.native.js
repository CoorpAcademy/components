import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M6.902 4.384V2.816H2.196c-.87 0-1.569.698-1.569 1.568v9.412c0 .863.698 1.569 1.57 1.569h9.41c.864 0 1.57-.706 1.57-1.569V9.09h-1.57v4.706h-9.41V4.384h4.705z"
      fill="#607D8B"
    />
    <Path
      d="M15.53.463h-5.49V2.03h2.807l-8.863 8.855 1.106 1.106 8.863-8.863v2.808h1.569l.007-5.474z"
      fill="#607D8B"
    />
  </Svg>
);

export default SvgComponent;
