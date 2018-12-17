import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M21 2H2v2h6v2c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2V3a1 1 0 0 0-1-1zM10 6V4h10v2H10zM18.651 14.241a1 1 0 0 0-1.206-.073L16 15.131V11a1 1 0 0 0-1.687-.725C13.592 10.957 10 14.488 10 17c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.557-1.211-2.64-1.349-2.759zM15 20c-1.654 0-3-1.346-3-3 0-.803.929-2.197 2-3.473V17a1 1 0 0 0 1.554.832l2.246-1.497c.112.2.2.432.2.665 0 1.654-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
