import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M18 3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2.875L12 23l3.125-5H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 11.803V16h-2v-1.197C9.862 14.37 9 13.25 9 12h2c0 .495.505 1 1 1s1-.505 1-1c0-.202-.562-.36-1.243-.529C10.726 11.212 9 10.781 9 9c0-1.25.862-2.37 2-2.803V5h2v1.198c1.137.433 1.997 1.553 1.997 2.802h-2c0-.495-.503-1-.997-1-.495 0-1 .505-1 1 0 .203.562.36 1.243.53C13.274 9.788 15 10.219 15 12c0 1.25-.861 2.37-2 2.803z"
    />
  </Svg>
);

export default SvgComponent;
