import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={9} cy={12} r={1.25} />
      <Circle cx={15} cy={12} r={1.25} />
      <Path d="M22.707 21.293c-1.699-1.699-1.957-3.557-.813-5.846A1 1 0 0 0 21 14h-2v-4c0-1.104-.897-2-2-2V5c0-1.104-.897-2-2-2H9c-1.103 0-2 .896-2 2v3c-1.103 0-2 .896-2 2v4H3a1.001 1.001 0 0 0-.895 1.448c1.145 2.289.886 4.146-.813 5.846A1 1 0 0 0 2 23h20a1.002 1.002 0 0 0 .707-1.707zM9 5h6v3H9V5zm-2 5h10v4H7v-4zM4.016 21c.847-1.524 1.004-3.213.461-5h15.045c-.543 1.787-.386 3.476.461 5H4.016z" />
    </G>
  </Svg>
);

export default SvgComponent;
