import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M14 2c-4.411 0-8 3.589-8 8 0 1.846.635 3.543 1.688 4.898l-5.396 5.395 1.414 1.414 5.396-5.395A7.957 7.957 0 0 0 14 18c4.411 0 8-3.589 8-8s-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Circle cx={13.999} cy={5.757} r={1} />
      <Circle cx={14} cy={10} r={1} />
      <Circle cx={16.121} cy={7.879} r={1} />
      <Circle cx={11.878} cy={12.121} r={1} />
      <Circle cx={18.242} cy={10} r={1} />
      <Circle cx={11.878} cy={7.878} r={1} />
      <Circle cx={16.121} cy={12.121} r={1} />
      <Circle cx={9.756} cy={10} r={1} />
      <Circle cx={13.999} cy={14.242} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
