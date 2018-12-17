import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 15c.348 0 .676-.01 1-.021v-3.002c-.328.012-.656.023-1 .023-4.176 0-7.191-.843-9-2.032V12c0 .769 2.216 3 9 3zM9 10a29.5 29.5 0 0 0 1.294-.03A1.99 1.99 0 0 1 12 9h3.544C17.312 8.304 18 7.427 18 7V4.968C16.191 6.157 13.176 7 9 7s-7.191-.843-9-2.032V7c0 .769 2.216 3 9 3zM10 18v-1.022c-.328.011-.656.022-1 .022-4.176 0-7.191-.843-9-2.032V16c0 2.626 4.527 4 9 4 .451 0 .9-.018 1.348-.045A5.842 5.842 0 0 1 10 18z" />
      <Path d="M9 5c5.195 0 7.705-1.307 8.599-2.266C16.404.936 12.688 0 9 0S1.596.936.401 2.734C1.295 3.693 3.805 5 9 5zM12 11v7c0 3.812 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.812 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
