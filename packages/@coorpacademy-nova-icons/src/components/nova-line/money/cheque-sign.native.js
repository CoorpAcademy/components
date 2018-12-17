import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 19h12v2H9zM13 16h8v2h-8z" />
      <Path d="M23 8h-4.586l3.293-3.292a.999.999 0 0 0 0-1.414l-3-3a.997.997 0 0 0-1.414 0L15 2.586l-1.293-1.292a.997.997 0 0 0-1.414 0l-3 3 1.414 1.414L13 3.415l.586.585-4 4H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-5-5.585L19.586 4 18 5.586 16.414 4 18 2.415zM16.586 7L9 14.586 7.414 13 15 5.415 16.586 7zM6.542 14.956l.502.503-.669.167.167-.67zM22 22H2V10h5.586l-2.293 2.294a.995.995 0 0 0-.263.463l-1 4a1.002 1.002 0 0 0 1.213 1.214l4-1a.998.998 0 0 0 .464-.263L16.414 10H22v12z" />
    </G>
  </Svg>
);

export default SvgComponent;
