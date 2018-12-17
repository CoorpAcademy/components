import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 17.416L3.586 9.001 5 7.587l7 7 7-7 1.414 1.414z"
    />
    <Path
      fill="currentColor"
      d="M12 12.416L3.586 4.001 5 2.587l7 7 7-7 1.414 1.414zM12 22.416l-8.414-8.415L5 12.587l7 7 7-7 1.414 1.414z"
    />
  </Svg>
);

export default SvgComponent;
