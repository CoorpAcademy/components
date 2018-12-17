import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M19.002 2.012h2v6h-2z" />
    <Circle fill="currentColor" cx={20.002} cy={10.006} r={1} />
    <Path
      fill="currentColor"
      d="M6.3 12.198a2.994 2.994 0 0 0 1.702-2.692c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.188.699 2.207 1.702 2.692-2.126.576-3.702 2.503-3.702 4.808v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2c0-2.305-1.576-4.232-3.702-4.808zM15.756 18.429a2.99 2.99 0 0 0 1.246-2.423c0-1.654-1.346-3-3-3s-3 1.346-3 3a2.99 2.99 0 0 0 1.246 2.423c-1.324.652-2.246 2.004-2.246 3.577v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.573-.921-2.925-2.246-3.577z"
    />
  </Svg>
);

export default SvgComponent;
