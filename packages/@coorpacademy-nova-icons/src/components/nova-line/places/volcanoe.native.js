import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M20 22.999H4a.998.998 0 0 1-.625-1.779C5.608 19.43 8 16.907 8 15.999c0-.551.448-1 1-1h6c.552 0 1 .449 1 1 0 .91 2.391 3.433 4.625 5.22a1 1 0 0 1-.625 1.78zm-13.331-2h10.66c-1.242-1.178-2.603-2.678-3.117-4H9.787c-.515 1.321-1.875 2.822-3.118 4zM15 13.999h-2v-4c0-.551.448-1 1-1h4a1.001 1.001 0 0 0 0-2h-2.551a1 1 0 0 1-.99-.857C14.283 4.921 13.226 3.999 12 3.999s-2.284.922-2.46 2.143a1 1 0 0 1-.99.857H6a1.001 1.001 0 0 0 0 2h4c.552 0 1 .449 1 1v4H9v-3H6c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3h1.773c.625-1.758 2.312-3 4.227-3s3.602 1.242 4.227 3H18c1.654 0 3 1.346 3 3 0 1.655-1.346 3-3 3h-3v3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
