import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M17.895 14.553A1.001 1.001 0 0 0 17 14H6c-.459 0-.859.312-.971.758L4.469 17h14.649l-1.223-2.447zM19 18H5a3 3 0 0 0 0 6h14a3 3 0 1 0 0-6zM7 22.25a1.25 1.25 0 1 1-.002-2.498A1.25 1.25 0 0 1 7 22.25zm5 0a1.25 1.25 0 1 1-.002-2.498A1.25 1.25 0 0 1 12 22.25zm5 0a1.25 1.25 0 1 1-.002-2.498A1.25 1.25 0 0 1 17 22.25zM20 9v1h-4.923l-.148-.371A1.001 1.001 0 0 0 14 9H9c-.408 0-.776.248-.929.629L6.723 13h9.555l-.4-1H20v1h2V9h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
