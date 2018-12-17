import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 18.5a1.5 1.5 0 0 0 3 0V15h-1.5v2A1.5 1.5 0 0 0 9 18.5z" />
      <Path d="M14.001 22H2V11h8V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h-2l.001 7z" />
      <Path d="M23.707 3.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.001 1.001 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.213l4-1a.991.991 0 0 0 .464-.264l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.805l-2.114.528.528-2.114L17 5.414 18.586 7l-3.097 3.098zM20 5.586L18.414 4 20 2.414 21.586 4 20 5.586zM10 12.813l-3.982 1.299a.75.75 0 0 0-.518.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3-.978v-1.578z" />
    </G>
  </Svg>
);

export default SvgComponent;
