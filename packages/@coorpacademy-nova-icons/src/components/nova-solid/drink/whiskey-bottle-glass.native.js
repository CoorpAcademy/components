import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 10h-7.071l-.144 2H20v1h-6.285l-.144 2H20v4c0 .551-.449 1-1 1h-5a.985.985 0 0 1-.76-.371l-.157 2.212c.29.094.595.159.917.159h5c1.654 0 3-1.346 3-3v-8a1 1 0 0 0-1-1z"
    />
    <G fill="currentColor">
      <Path d="M10 4.999V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2h5zM10 8.325V5.999H5v2.326C3.919 8.821 2 9.985 2 12c0 2.047.969 8.853 1.01 9.142.07.493.492.858.99.858h7c.498 0 .92-.365.99-.858.041-.29 1.01-7.095 1.01-9.142 0-2.015-1.919-3.179-3-3.675zM10 19H5l-1-5h7l-1 5z" />
    </G>
    <Circle fill="currentColor" cx={15} cy={18} r={1} />
    <G>
      <Circle fill="currentColor" cx={18} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
