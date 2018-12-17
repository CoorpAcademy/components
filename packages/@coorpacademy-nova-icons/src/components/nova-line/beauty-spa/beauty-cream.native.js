import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M19.93 13c.042-.247.07-.513.07-.814C20 9.593 18.262 6 15 6l-.92.075-.08.913C13.946 7.612 12.334 10 10 10c-2.722 0-4.096 1.934-4.647 3H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2.07zM10 12c2.746 0 4.964-2.166 5.721-3.879.939.327 1.498 1.25 1.77 1.845.632 1.379.563 2.669.386 3.034H7.763c.484-.522 1.207-1 2.237-1zm-6 8v-5h16l.001 5H4z" />
      <Path d="M7 17h10v2H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
