import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M15 7.607V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4.607c-.633.715-2 2.48-2 4.393v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9c0-1.913-1.367-3.678-2-4.393zM13 4v1h-2V4h2zm2 16H9v-8c0-1.29 1.233-2.814 1.709-3.294.186-.187.291-.442.291-.706V7h2v1c0 .264.105.519.291.706C13.767 9.186 15 10.71 15 12v8z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
