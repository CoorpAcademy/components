import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={12} cy={15} r={1.5} />
      <Path d="M21.895 20.553l-9-18c-.339-.678-1.45-.678-1.789 0l-9 18A1.001 1.001 0 0 0 3 22h18c.347 0 .668-.18.851-.474.182-.295.198-.663.044-.973zM12 5.236l3.492 6.985C14.531 11.558 13.332 11 12 11s-2.531.558-3.493 1.221L12 5.236zm3.676 9.762C14.942 15.765 13.523 17 12 17c-1.534 0-2.945-1.23-3.676-1.998C9.058 14.235 10.477 13 12 13c1.534 0 2.945 1.231 3.676 1.998zM4.618 20l1.967-3.935C7.409 16.998 9.47 19 12 19s4.591-2.002 5.414-2.935L19.382 20H4.618z" />
    </G>
  </Svg>
);

export default SvgComponent;
