import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M23.885 12.558l.01-.005L20.618 6H22V4h-9V2h-2v2H2v2h1.382L.106 12.553l.01.005A.96.96 0 0 0 0 13c0 2.757 2.243 5 5 5s5-2.243 5-5a.971.971 0 0 0-.115-.442l.01-.005L6.618 6H11v14H8v2h8v-2h-3V6h4.382l-3.276 6.553.01.005A.96.96 0 0 0 14 13c0 2.757 2.243 5 5 5s5-2.243 5-5a.971.971 0 0 0-.115-.442zM5 7.236L7.382 12H2.618L5 7.236zM5 16a3.004 3.004 0 0 1-2.828-2h5.656A3.004 3.004 0 0 1 5 16zm16.382-4h-4.764L19 7.236 21.382 12zM19 16a3.004 3.004 0 0 1-2.828-2h5.656A3.004 3.004 0 0 1 19 16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
