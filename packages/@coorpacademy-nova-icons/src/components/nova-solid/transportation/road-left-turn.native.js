import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M6 2H3a1 1 0 0 0-1 1v2h1v2H2v2a1 1 0 0 0 1 1h3c4.411 0 8 3.589 8 8v3a1 1 0 0 0 1 1h2v-1h2v1h2a1 1 0 0 0 1-1v-3C22 9.178 14.822 2 6 2zm3.693 5.635a10.998 10.998 0 0 0-3.179-.624l.093-1.998c1.288.06 2.552.308 3.758.738l-.672 1.884zm5.15 3.822a11.046 11.046 0 0 0-2.291-2.294l1.192-1.605a13.062 13.062 0 0 1 2.706 2.709l-1.607 1.19zm2.145 6.039a10.928 10.928 0 0 0-.621-3.179l1.884-.671c.43 1.207.677 2.472.735 3.761l-1.998.089z"
    />
  </Svg>
);

export default SvgComponent;
