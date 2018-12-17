import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M12 2c-4.418 0-8 3.582-8 8s8 12 8 12 8-7.582 8-12-3.582-8-8-8zm4.242 10.828l-1.415 1.415L12 11.415l-2.828 2.828-1.415-1.415L10.585 10 7.757 7.172l1.415-1.414L12 8.586l2.828-2.828 1.415 1.414L13.414 10l2.828 2.828z"
    />
  </Svg>
);

export default SvgComponent;
