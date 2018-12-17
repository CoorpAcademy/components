import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 7V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1h10zM7 8v2c0 2.757 2.243 5 5 5s5-2.243 5-5V8H7zm6 4.815V11h-2v1.815A2.993 2.993 0 0 1 9 10h6a2.993 2.993 0 0 1-2 2.815z" />
      <G>
        <Path d="M19.898 21a5.132 5.132 0 0 0-.838-2H4.939a5.132 5.132 0 0 0-.838 2h15.797zM18.156 18c-1.42-1.254-3.572-2-6.156-2s-4.736.746-6.156 2h12.312zM4 22h16v2H4z" />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
