import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M16 12a4.965 4.965 0 0 0-3.303 1.273C13.511 14.298 14 15.591 14 17s-.489 2.703-1.303 3.727A4.962 4.962 0 0 0 16 22a5 5 0 1 0 0-10z" />
      <Circle cx={8} cy={17} r={5} />
      <Path d="M9.303 11.146c.673-1.894 2.491-5.738 6.429-6.843-1.546 2.649-1.332 5.327-1.011 6.837.412-.089.84-.14 1.279-.14.255 0 .504.021.751.052-.339-1.307-.808-4.581 1.956-7.346A1 1 0 0 0 18 2C10.697 2 7.944 8.804 7.232 11.055 7.484 11.023 7.739 11 8 11c.447 0 .883.053 1.303.146z" />
    </G>
  </Svg>
);

export default SvgComponent;
