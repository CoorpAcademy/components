import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 17.999H2v-2h10v-14c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h7v-2zm-7-16h8v2H2v-2zm0 4h8v8H2v-8zM20.707 11.292a.999.999 0 0 0-1.414 0l-7 7a1.01 1.01 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1c.176-.045.336-.137.465-.264l7-7a1 1 0 0 0 0-1.414l-3.001-3zm-5.219 9.803l-2.114.529.53-2.113L17 16.413l1.586 1.586-3.098 3.096zM20 16.585l-1.586-1.586L20 13.413l1.586 1.586L20 16.585z" />
    </G>
  </Svg>
);

export default SvgComponent;
