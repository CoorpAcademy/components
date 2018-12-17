import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M19 19.001H5a1 1 0 0 1-1-1v-10c0-.323.156-.626.419-.813l7-5a.997.997 0 0 1 1.162 0l7 5c.263.187.419.49.419.813v10a1 1 0 0 1-1 1zm-13-2h12V8.516L12 4.23 6 8.516v8.485z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M13 10.001l-1-3-1 3H8l2 2-1 3 3-2 3 2-1-3 2-2zM4 20.001h16v2H4z"
    />
  </Svg>
);

export default SvgComponent;
