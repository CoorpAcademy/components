import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M19.382 24h2.236L20 20.764V11h1V9h-1V8c0-4.411-3.589-8-8-8S4 3.589 4 8v1H3v2h1v9.764L2.382 24h2.236l1-2h12.764l1 2zM7 8c0-2.757 2.243-5 5-5s5 2.243 5 5v2c0 2.757-2.243 5-5 5s-5-2.243-5-5V8zm5 10a7.976 7.976 0 0 0 6-2.726V20H6v-4.726A7.976 7.976 0 0 0 12 18z"
    />
  </Svg>
);

export default SvgComponent;
