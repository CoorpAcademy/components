import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 24C5.383 24 0 18.618 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10z"
      fill="currentColor"
    />
    <Path
      d="M10.506 9.413L8.003 5.079A7.985 7.985 0 0 0 4 12h5c0-1.11.609-2.068 1.506-2.587zM15 12h5c0-2.96-1.612-5.54-4.003-6.921l-2.503 4.333A2.988 2.988 0 0 1 15 12zM13.494 14.587c-.441.256-.947.413-1.494.413s-1.053-.157-1.494-.413l-2.503 4.336a7.952 7.952 0 0 0 7.994 0l-2.503-4.336z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
