import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.898 0 5v13c0 1.104.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.896 2-2V5c0-1.102-.897-2-2-2zm-.003 15H2V5h20l-.003 13z" />
      <Path d="M5 16a1 1 0 0 0 1-1v-3.673l2 .571V15a1 1 0 0 0 .684.949l3 1a1.005 1.005 0 0 0 .632 0l3-1A1 1 0 0 0 16 15v-3.102l3.275-.936c.429-.123.725-.516.725-.962s-.296-.839-.725-.96l-7-2a.99.99 0 0 0-.55 0l-7 2a1.22 1.22 0 0 0-.465.302C4.103 9.52 4 9.763 4 10v5a1 1 0 0 0 1 1zm9-1.721l-2 .667-2-.667v-1.811l1.725.493a.993.993 0 0 0 .55.001L14 12.469v1.81zM12 9.04l3.36.96-3.36.96L8.64 10 12 9.04z" />
    </G>
  </Svg>
);

export default SvgComponent;
