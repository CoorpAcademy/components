import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M19.595 2.194a.997.997 0 0 0-1.149-.028l-2.318 1.546-.36-.361c-.873-.873-2.033-1.353-3.268-1.353s-2.395.48-3.268 1.353l-.36.361-2.317-1.546a.998.998 0 0 0-1.513 1.119L8 13.146v7.852h2v1h5v-1h2v-7.852l2.958-9.86a1.001 1.001 0 0 0-.363-1.092zM15 18.998h-5v-5h5v5zm.256-7H9.744L7.756 5.371l.689.459a1 1 0 0 0 1.262-.125l.939-.94c.99-.991 2.717-.991 3.707 0l.939.94c.337.336.866.39 1.262.125l.689-.458-1.987 6.626z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
