import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={8.773} cy={15.729} r={1.446} fill="currentColor" />
    <Path
      d="M18.673 3l-7.571 7.573-.858-.858c-.756-.756-2.072-.756-2.828 0l-3.951 3.949a2.003 2.003 0 0 0 .001 2.828l4.545 4.545c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l3.949-3.949c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-.858-.858 1.914-1.914-1.414-1.414 1.414-1.414 1.414 1.414 1.414-1.414-1.414-1.415 1.415-1.415 1.414 1.414 1.414-1.414L18.673 3zM9.425 19.623L4.88 15.077l3.95-3.948 4.545 4.545-3.95 3.949z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
