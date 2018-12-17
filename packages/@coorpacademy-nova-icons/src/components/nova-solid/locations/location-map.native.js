import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.759 19.807l-1.566-7.048C19.974 11.773 19.011 11 18 11h-1.521C14.702 13.985 12 17 12 17s-2.702-3.015-4.479-6H6c-1.011 0-1.974.773-2.193 1.759l-1.566 7.048c-.123.554 0 1.112.337 1.532.337.42.855.661 1.422.661h16c.567 0 1.085-.241 1.422-.661.337-.42.46-.979.337-1.532z" />
      <Path d="M16 6.999a4 4 0 0 0-8 0c0 2.211 4 7 4 7s4-4.789 4-7zm-6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
