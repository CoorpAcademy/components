import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M6.814 8.982c-2.275 2.692-2.158 6.609.117 9.171l-2.897 3.426 1.527 1.291 2.902-3.433a6.994 6.994 0 0 0 3.698 1.076c2.07 0 4.022-.906 5.355-2.486C20.069 15.01 20.771 6.945 21 3c-3.235.876-11.968 3.356-14.186 5.982zm2.121 8.349a5.016 5.016 0 0 1-.593-7.059c1.25-1.479 6.562-3.427 10.422-4.574L8.935 17.331z"
    />
  </Svg>
);

export default SvgComponent;
