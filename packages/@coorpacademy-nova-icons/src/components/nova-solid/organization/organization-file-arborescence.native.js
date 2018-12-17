import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.707 3.293l-3-3A1 1 0 0 0 17 0h-4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a.997.997 0 0 0-.293-.707zM17 4V1l3 3h-3zM20.707 16.293l-3-3A1 1 0 0 0 17 13h-4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-6a.997.997 0 0 0-.293-.707zM17 17v-3l3 3h-3z"
    />
    <Circle fill="currentColor" cx={1} cy={1} r={1} />
    <Circle fill="currentColor" cx={1} cy={5} r={1} />
    <Circle fill="currentColor" cx={1} cy={9} r={1} />
    <Circle fill="currentColor" cx={1} cy={13} r={1} />
    <Circle fill="currentColor" cx={1} cy={17} r={1} />
    <Circle fill="currentColor" cx={5} cy={17} r={1} />
    <Circle fill="currentColor" cx={9} cy={17} r={1} />
    <Circle fill="currentColor" cx={9} cy={5} r={1} />
    <Circle fill="currentColor" cx={5} cy={5} r={1} />
  </Svg>
);

export default SvgComponent;
