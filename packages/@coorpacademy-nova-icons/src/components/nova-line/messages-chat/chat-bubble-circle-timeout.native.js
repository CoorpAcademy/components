import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M10.998 22.001H3.291l1.328-1.43c.348-.375.356-.952.021-1.338-1.073-1.232-1.642-2.695-1.642-4.232 0-2.932 2.072-5.443 5-6.484V6.416c-4.053 1.149-7 4.563-7 8.585 0 1.735.541 3.392 1.572 4.836L.265 22.321a.999.999 0 0 0 .733 1.68h10c5.514 0 10-4.037 10-9h-2c0 3.86-3.589 7-8 7z"
      fill="currentColor"
    />
    <Path
      d="M16.998 14.001c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M19.998 8.001h-4v-5h2v3h2z" />
  </Svg>
);

export default SvgComponent;
