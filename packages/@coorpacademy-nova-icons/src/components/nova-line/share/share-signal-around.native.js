import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Circle cx={12} cy={12} r={2} fill="currentColor" />
    <Path
      d="M4.929 19.07c-3.899-3.898-3.899-10.243 0-14.143l1.414 1.414c-3.119 3.12-3.119 8.195 0 11.314L4.929 19.07zM19.07 19.07l-1.414-1.414A7.942 7.942 0 0 0 20 12a7.947 7.947 0 0 0-2.344-5.658l1.414-1.414C20.959 6.816 22 9.328 22 12s-1.041 5.182-2.93 7.07z"
      fill="currentColor"
    />
    <Path
      d="M7.758 16.242A5.962 5.962 0 0 1 6 12c0-1.604.625-3.109 1.758-4.242l1.414 1.414C8.416 9.926 8 10.932 8 12s.416 2.072 1.172 2.827l-1.414 1.415zM16.242 16.242l-1.414-1.415C15.584 14.072 16 13.068 16 12s-.416-2.074-1.172-2.828l1.414-1.414A5.958 5.958 0 0 1 18 12a5.962 5.962 0 0 1-1.758 4.242z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
