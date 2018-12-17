import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13.723 13.579l2.121-2.121-1.414-1.414 1.414-1.415 1.415 1.415 1.414-1.414-1.415-1.415 1.415-1.414 1.415 1.414 1.414-1.414-2.828-2.83-7.778 7.779-.707-.707a1.998 1.998 0 0 0-2.828 0l-3.536 3.535a2 2 0 0 0 .001 2.828l4.242 4.242a2 2 0 0 0 2.828 0l3.535-3.535a1.998 1.998 0 0 0 0-2.828l-.708-.706zM9.834 16.76a1.5 1.5 0 1 1-2.121-2.12 1.5 1.5 0 0 1 2.121 2.12z"
    />
  </Svg>
);

export default SvgComponent;
