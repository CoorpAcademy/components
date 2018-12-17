import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.562 11.019C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v12h12v-3h1c1.103 0 2-.897 2-2v-3h2.281s-.59-2.408-.72-2.981zm-9.854 1.274l-1.414 1.414-3-3a.999.999 0 0 1 0-1.414l3-3 1.414 1.414L8.415 10l2.293 2.293zm7-1.586l-3 3-1.414-1.414L15.587 10l-2.293-2.293 1.414-1.414 3 3a.999.999 0 0 1 0 1.414z"
    />
  </Svg>
);

export default SvgComponent;
