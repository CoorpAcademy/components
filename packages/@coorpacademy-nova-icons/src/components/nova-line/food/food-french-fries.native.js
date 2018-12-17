import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19.971 3.243l-1.942-.486L16.719 8h2.062zM15.995 3.1l-1.99-.2-.51 5.1h2.01zM11 2h2v8h-2zM10.505 8l-.51-5.1-1.99.2.49 4.9zM7.619 8L6.98 4.804l-1.96.392L5.58 8z" />
      <Path d="M18 9h-3c-.379 0-.725.214-.895.553L13.382 11h-2.764l-.723-1.447A1.001 1.001 0 0 0 9 9H6a1 1 0 0 0-.996 1.091l1 11A1 1 0 0 0 7 22h10a1 1 0 0 0 .996-.909l1-11A1 1 0 0 0 18 9zm-9.618 2l.724 1.447A.998.998 0 0 0 10 13h4c.379 0 .725-.214.895-.553L15.618 11h1.286l-.363 4H7.459l-.363-4h1.286zm-.469 9l-.182-2h8.537l-.182 2H7.913z" />
    </G>
  </Svg>
);

export default SvgComponent;
