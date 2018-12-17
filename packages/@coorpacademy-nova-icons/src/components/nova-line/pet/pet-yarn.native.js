import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4.408 16.113l.719-2.339-2.539-.595a8.98 8.98 0 0 0 1.82 2.934zM8.577 14.582l-1.987-.465-.952 3.1c.558.416 1.16.772 1.806 1.051l1.133-3.686zM19.307 13.467L2.029 9.416C2.017 9.61 2 9.803 2 10a9 9 0 0 0 .14 1.533l16.115 3.777a9.016 9.016 0 0 0 1.052-1.843zM19.981 9.629L3.108 5.675a8.919 8.919 0 0 0-.858 2.252l17.511 4.105a8.144 8.144 0 0 0 .22-2.403zM11 19c.099 0 .195-.012.293-.014l1.079-3.514-2.332-.546-1.17 3.811A9.062 9.062 0 0 0 11 19zM8.978 1.236a9 9 0 0 0-4.974 3.108l3.75.878 1.224-3.986zM17.522 3.811l-1.061 3.453 3.319.778a8.959 8.959 0 0 0-2.258-4.231zM12.698 1.165a7.986 7.986 0 0 0-2.085-.145L9.217 5.566l1.987.466 1.494-4.867zM14.998 6.921l1.288-4.194a8.983 8.983 0 0 0-2.145-1.152l-1.474 4.8 2.331.546z" />
      <Path d="M20 17h-3.388c.171-.137.349-.266.509-.415l-3.285-.77L12.858 19H20c.551 0 1 .449 1 1s-.449 1-1 1H6v2h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
