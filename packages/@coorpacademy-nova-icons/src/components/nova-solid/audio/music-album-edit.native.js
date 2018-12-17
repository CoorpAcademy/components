import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 18.502a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l4.087-1.333a8.978 8.978 0 0 1-1.874-3.78H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.058a8.957 8.957 0 0 1-4-1.459v4.017z" />
      <Path d="M23.707 3.295l-3-3a1 1 0 0 0-1.414 0l-7 7a1.006 1.006 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.211l4-1a1 1 0 0 0 .465-.262l7-7a.999.999 0 0 0 0-1.414zM15.488 10.1l-2.114.529.529-2.114L17 5.417l1.586 1.586-3.098 3.097zM20 5.589l-1.586-1.587L20 2.417l1.586 1.586L20 5.589z" />
    </G>
  </Svg>
);

export default SvgComponent;
