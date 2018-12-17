import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.968 13a6.955 6.955 0 0 1-1.369 3.555l1.427 1.426a8.947 8.947 0 0 0 1.942-4.98h-2zM13 19.29v2.02a8.935 8.935 0 0 0 4.611-1.916l-1.426-1.426A6.966 6.966 0 0 1 13 19.29zM20.888 11a8.982 8.982 0 0 0-2.138-4.584l-1.5 1.324A6.976 6.976 0 0 1 18.86 11h2.028zM7.473 4.604C4.803 6.167 3 9.059 3 12.37c0 4.624 3.507 8.44 8 8.94v-2.02c-3.387-.487-6-3.401-6-6.92 0-2.745 1.592-5.12 3.898-6.266L12 9.37V2H5l2.473 2.604z" />
    </G>
  </Svg>
);

export default SvgComponent;
