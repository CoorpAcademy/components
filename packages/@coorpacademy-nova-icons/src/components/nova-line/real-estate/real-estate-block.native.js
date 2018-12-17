import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M8.25 16c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75S8.25 13.932 8.25 16zM12 13.75c.346 0 .671.085.964.226l-2.988 2.989A2.22 2.22 0 0 1 9.75 16 2.252 2.252 0 0 1 12 13.75zm0 4.5c-.346 0-.671-.085-.964-.226l2.988-2.988c.141.293.226.618.226.964A2.252 2.252 0 0 1 12 18.25z" />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.415 18.586 12H18z" />
    </G>
  </Svg>
);

export default SvgComponent;
