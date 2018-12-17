import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.707 8.952L16.05 3.295a1.002 1.002 0 0 0-1.694.543l-.188 5.582L4.03 19.56l-.707-.708-1.415 2.828 1.414 1.414 2.829-1.414-.707-.707.836-.836c.145.304.333.591.579.836l1.414 1.414c.566.566 1.32.878 2.121.878.802 0 1.555-.312 2.122-.878l-1.414-1.414c-.39.39-1.025.39-1.415 0L8.272 19.56a1.003 1.003 0 0 1-.001-1.415l5.657-5.656a1.002 1.002 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.413l1.414 1.415a2.98 2.98 0 0 0 .879-2.122c0-.801-.312-1.554-.879-2.12l-1.414-1.415c-.102-.102-.218-.184-.332-.268l4.739-.159a1.003 1.003 0 0 0 .543-1.695z" />
      <Path d="M13.93 22.388l-3.536-3.536 1.415-1.414 3.535 3.536zM16.756 19.56l-3.536-3.537 1.416-1.415 3.535 3.537z" />
    </G>
  </Svg>
);

export default SvgComponent;
