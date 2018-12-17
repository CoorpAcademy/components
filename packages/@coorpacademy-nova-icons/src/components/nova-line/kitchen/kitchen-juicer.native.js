import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <Path
      d="M21 11h-4c0-3.402-3.252-7-5-7s-5 3.598-5 7H3a1 1 0 0 0-.707 1.706L5 15.414V18c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2v-5h1v5h2v-6a1 1 0 0 0-1-1zm-6 0h-2V6.833c.914.945 2 2.55 2 4.167zm-4-4.167V11H9c0-1.617 1.086-3.222 2-4.167zM17 18H7v-3a.997.997 0 0 0-.293-.707L5.414 13H17v5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
