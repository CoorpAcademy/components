import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 23.001a1.002 1.002 0 0 1-1-1v-7.586l-5.293 5.293-1.414-1.414 6.293-6.293-6.293-6.293 1.414-1.414L11 9.587V2.001a1.002 1.002 0 0 1 1.707-.707l5 5a.999.999 0 0 1 0 1.414l-4.293 4.293 4.293 4.293a.999.999 0 0 1 0 1.414l-5 5a.996.996 0 0 1-.707.293zm1-8.585v5.172l2.586-2.586L13 14.416zm0-10v5.172l2.586-2.586L13 4.416z"
    />
  </Svg>
);

export default SvgComponent;
