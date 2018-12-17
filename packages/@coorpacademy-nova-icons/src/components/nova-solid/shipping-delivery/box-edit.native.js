import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.448A1.001 1.001 0 0 0 15 .003h-4v6h8.535L15.832.448zM17 9c1.054 0 2.06.19 3 .523v-1.52H0v11a1 1 0 0 0 1 1h7.231A8.99 8.99 0 0 1 8 18a9 9 0 0 1 9-9zM9 .003H5a1 1 0 0 0-.832.445L.465 6.003H9v-6zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-7 7a.997.997 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.114.529.529-2.114L17 16.414 18.586 18l-3.098 3.097zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
