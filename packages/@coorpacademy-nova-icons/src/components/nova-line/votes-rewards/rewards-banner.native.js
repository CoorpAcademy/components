import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M16 2.001H8c-1.104 0-2 .897-2 2v17a1.002 1.002 0 0 0 1.707.707L12 17.415l4.293 4.293A1 1 0 0 0 18 21.001v-17c0-1.103-.896-2-2-2zm-3.293 8.293a.999.999 0 0 0-1.414 0L8 13.587v-2.172l4-4 4 4v2.172l-3.293-3.293zM16 4.001v4.586l-3.293-3.293a.999.999 0 0 0-1.414 0L8 8.587V4.001h8zm-3.293 11.293a.999.999 0 0 0-1.414 0L8 18.587v-2.172l4-4 4 4v2.172l-3.293-3.293z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
