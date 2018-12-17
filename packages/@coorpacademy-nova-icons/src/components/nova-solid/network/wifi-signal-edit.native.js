import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.607 17.998c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.655-1.345-3-3-3zm0 4a1.001 1.001 0 1 1 1-1c0 .551-.449 1-1 1zM11 5.026C6.955 5.177 3.17 6.805.293 9.684l1.414 1.414c2.5-2.5 5.782-3.921 9.293-4.071V5.026zM23.707 3.29l-3-3a.999.999 0 0 0-1.414 0l-7 7a1 1 0 0 0-.264.464l-1 4c-.084.342.016.701.264.95a.995.995 0 0 0 .949.263l4-1a.984.984 0 0 0 .465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.113.529.527-2.114L17 5.411l1.586 1.587-3.098 3.096zM20 5.583l-1.586-1.585L20 2.411l1.586 1.587L20 5.583zM10 9.123a11.93 11.93 0 0 0-6.878 3.389l1.414 1.413A9.94 9.94 0 0 1 10 11.141V9.123zM10 13.159a7.947 7.947 0 0 0-4.049 2.182l1.414 1.414A5.961 5.961 0 0 1 10 15.219v-2.06z" />
    </G>
  </Svg>
);

export default SvgComponent;
