import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.707 4.293l-2-2a1 1 0 0 0-1.414 0l-5 5a.999.999 0 0 0 0 1.414l.293.293-2.697 2.697-.697-.697a1.03 1.03 0 0 0-1.415 0l-.571.574a5.976 5.976 0 0 0-4.731.719l8.256 8.255a6.005 6.005 0 0 0 .718-4.734l.571-.571a.999.999 0 0 0 0-1.414l-.718-.717L15 10.414l.293.293a.999.999 0 0 0 1.414 0l5-5a.999.999 0 0 0 0-1.414zM10.293 23.706l-10-10 1.414-1.413 10 10z" />
    </G>
  </Svg>
);

export default SvgComponent;
