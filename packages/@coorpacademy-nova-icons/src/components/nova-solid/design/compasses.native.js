import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M12.002 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM11 0h2v2h-2zM19 11h-2c0 .982-.481 1.848-1.212 2.396l-1.183-3.144a4.983 4.983 0 0 1-1.915.681L13.786 14h-3.571l1.096-3.068a4.953 4.953 0 0 1-1.915-.683L5.502 20.602 7 23l2.5-7H14c.165 0 .321-.033.482-.049L17 23l1.499-2.398-1.994-5.3C17.989 14.434 19 12.841 19 11z" />
    </G>
  </Svg>
);

export default SvgComponent;
