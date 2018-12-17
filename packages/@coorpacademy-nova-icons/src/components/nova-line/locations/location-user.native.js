import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4a1.001 1.001 0 1 0 1 1c0-.551-.449-1-1-1zM14 20h-4a1 1 0 0 1-1-1v-4H8a1 1 0 0 1-1-1v-2c0-2.757 2.243-5 5-5s5 2.243 5 5v2a1 1 0 0 1-1 1h-1v4a1 1 0 0 1-1 1zm-3-2h2v-4a1 1 0 0 1 1-1h1v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1h1a1 1 0 0 1 1 1v4z"
      fill="currentColor"
    />
    <Path
      d="M12 24c-4.816 0-10-1.251-10-4 0-.969.667-2.316 3.841-3.232l.555 1.922C4.417 19.261 4 19.898 4 20c0 .515 2.75 2 8 2s8-1.485 8-2c0-.096-.389-.704-2.239-1.264l.58-1.914C21.365 17.738 22 19.056 22 20c0 2.749-5.184 4-10 4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
