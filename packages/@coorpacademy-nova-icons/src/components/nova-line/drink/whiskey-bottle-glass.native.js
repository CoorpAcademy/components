import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 10h-7.071l-.144 2H20v1h-6.285l-.144 2H20v4c0 .551-.449 1-1 1h-5a.983.983 0 0 1-.76-.371l-.158 2.212c.291.095.596.159.918.159h5c1.654 0 3-1.346 3-3v-8a1 1 0 0 0-1-1zM10 8.327V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5.328C3.919 8.823 2 9.986 2 12c0 2.048.969 8.852 1.01 9.142.07.493.492.858.99.858h7a1 1 0 0 0 .99-.858C12.031 20.853 13 14.048 13 12c0-2.014-1.919-3.177-3-3.673zM8 4v1H7V4h1zm2.13 16H4.87C4.607 18.082 4 13.502 4 12c0-1.034 1.717-1.848 2.316-2.051A1 1 0 0 0 7 9V7h1v2a1 1 0 0 0 .684.949C9.173 10.112 11 10.938 11 12c0 1.5-.607 6.082-.87 8z" />
      <Path d="M6 19h3l1-6H5z" />
      <Circle cx={15} cy={18} r={1} />
      <Circle cx={18} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
