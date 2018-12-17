import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 4C5.935 4 1 8.934 1 15v5h22v-5c0-6.066-4.935-11-11-11zm-1.731 14c.347-.597.993-1 1.731-1s1.385.403 1.731 1h-3.462zM21 18h-5.143A3.997 3.997 0 0 0 13 15.142V11h-2v4.142A3.993 3.993 0 0 0 8.143 18H3v-3c0-4.962 4.037-9 9-9s9 4.038 9 9v3z"
      fill="currentColor"
    />
    <Circle cx={12} cy={8} r={1} fill="currentColor" />
    <Circle cx={16.95} cy={10.049} r={1} fill="currentColor" />
    <Circle cx={19} cy={15} r={1} fill="currentColor" />
    <Circle cx={7.05} cy={10.05} r={1.001} fill="currentColor" />
    <Circle cx={5} cy={15} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
