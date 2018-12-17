import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={7} cy={15.5} r={1} />
      <Circle cx={11} cy={15.5} r={1} />
      <Circle cx={15} cy={15.5} r={1} />
      <Path d="M22 17h-2.276c.168-.471.276-.971.276-1.5 0-2.481-2.019-4.5-4.5-4.5h-.882l-1.724-3.447A.998.998 0 0 0 12 7h-2c0-1.654-1.346-3-3-3H6v2h1c.551 0 1 .449 1 1H6a1 1 0 0 0-1 1v3.276c-1.742.622-3 2.271-3 4.224C2 17.982 4.019 20 6.5 20h9a4.453 4.453 0 0 0 2.793-1H22v-2zM7 9h4.382l1 2H7V9zm8.5 9h-9C5.122 18 4 16.879 4 15.5S5.122 13 6.5 13h9c1.378 0 2.5 1.121 2.5 2.5S16.878 18 15.5 18z" />
    </G>
  </Svg>
);

export default SvgComponent;
