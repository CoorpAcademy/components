import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20.292 10.363l1.414-1.414-2.827-2.828 1.413-1.413-1.414-1.414-9.391 9.393.002.002A4.934 4.934 0 007 12a5 5 0 105 5 4.948 4.948 0 00-1.013-2.987l3.649-3.648 2.827 2.828 1.415-1.413-2.828-2.83 1.414-1.414 2.828 2.827zM7 20a3 3 0 110-6 3 3 0 010 6z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
