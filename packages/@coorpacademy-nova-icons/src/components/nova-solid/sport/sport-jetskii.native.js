import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 3h4v2H9zM14 3v5h8zM22 9H4l-2 4h16.575c1.515-.874 2.746-2.304 3.425-4zM22 14h-2c0 1.102-.897 2-2 2s-2-.898-2-2h-2c0 1.102-.897 2-2 2s-2-.898-2-2H8c0 1.102-.897 2-2 2s-2-.898-2-2H2c0 1.102-.897 2-2 2v2c1.2 0 2.266-.542 3-1.383C3.734 17.458 4.8 18 6 18s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383A3.973 3.973 0 0 0 24 18v-2c-1.103 0-2-.898-2-2zM22 19h-2c0 1.103-.897 2-2 2s-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H8c0 1.103-.897 2-2 2s-2-.897-2-2H2c0 1.103-.897 2-2 2v2c1.2 0 2.266-.542 3-1.383C3.734 22.458 4.8 23 6 23s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383c.734.841 1.8 1.383 3 1.383s2.266-.542 3-1.383A3.973 3.973 0 0 0 24 23v-2c-1.103 0-2-.897-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
