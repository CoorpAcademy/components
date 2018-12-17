import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18.906 14c.055.328.092.66.092 1 0 3.86-3.589 7-8 7H3.291l1.328-1.43c.348-.375.356-.952.021-1.338C3.566 18 2.998 16.537 2.998 15c0-3.859 3.589-7 8-7 1.061 0 2.072.186 3 .516V6.415a10.974 10.974 0 0 0-3-.415c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836L.265 22.32A.999.999 0 0 0 .998 24h10c5.514 0 10-4.037 10-9 0-.338-.025-.671-.065-1h-2.027zM20.998 9h-2V6h1a2 2 0 1 0-2-2h-2c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.874V9z"
      fill="currentColor"
    />
    <Circle cx={19.998} cy={11} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
