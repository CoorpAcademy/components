import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M22.998 4.998h-5.465L15.83 2.443a1.002 1.002 0 0 0-.832-.446h-6a1 1 0 0 0-.832.446L6.463 4.998H.998a1 1 0 0 0-1 1v14a1 1 0 0 0 .804.981c.208.041 5.167 1.019 11.196 1.019s10.988-.978 11.196-1.019a1 1 0 0 0 .804-.981v-14a1 1 0 0 0-1-1zm-1 14.162c-1.633.273-5.557.837-10 .837s-8.367-.564-10-.837V6.998h5a.999.999 0 0 0 .832-.445l1.703-2.555h4.93l1.703 2.555a.999.999 0 0 0 .832.445h5V19.16z" />
      <Path d="M6.998 8.998h-2v2h-2v2h2v2h2v-2h2v-2h-2zM9.998 16.998h8v-8h-8v8zm2-6h4v4h-4v-4z" />
      <Circle cx={19.998} cy={9.998} r={1} />
      <Circle cx={19.998} cy={12.998} r={1} />
      <Circle cx={19.998} cy={15.998} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
