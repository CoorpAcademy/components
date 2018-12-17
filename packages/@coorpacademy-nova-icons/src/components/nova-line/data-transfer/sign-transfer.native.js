import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.707 11.294l-11-11a.999.999 0 0 0-1.414 0l-11 11a.999.999 0 0 0 0 1.414l11 11a.997.997 0 0 0 1.414 0l11-11a.999.999 0 0 0 0-1.414zM12 21.587l-9.586-9.586L12 2.415l9.586 9.586L12 21.587z" />
      <Path d="M14.293 10.708l1.414-1.414L12 5.587 8.293 9.294l1.414 1.414L11 9.415v5.172l-1.293-1.293-1.414 1.414L12 18.415l3.707-3.707-1.414-1.414L13 14.587V9.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
