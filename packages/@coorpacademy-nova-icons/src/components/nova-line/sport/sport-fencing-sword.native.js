import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      d="M19.817 5.596l-1.414-1.414-9.769 9.769a4.958 4.958 0 0 0-2.756-.83c-1.336 0-2.591.52-3.536 1.465a.999.999 0 0 0 0 1.414l2.122 2.121-2.829 2.828 1.414 1.414 2.829-2.828L8 21.656a.999.999 0 0 0 1.414 0 4.97 4.97 0 0 0 1.464-3.535 4.96 4.96 0 0 0-.829-2.756l9.768-9.769zM8.587 19.415l-4.003-4.001C5.685 14.885 7.11 15.111 8 16c.566.566.878 1.32.878 2.121 0 .455-.1.895-.291 1.294z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
