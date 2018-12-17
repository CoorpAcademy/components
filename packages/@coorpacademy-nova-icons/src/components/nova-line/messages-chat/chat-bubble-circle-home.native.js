import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M18.91 14.017c.052.322.088.649.088.984 0 3.86-3.589 7-8 7H3.291l1.328-1.43a1 1 0 0 0 .021-1.338c-1.074-1.232-1.642-2.695-1.642-4.232 0-2.932 2.072-5.443 5-6.484V6.416c-4.053 1.149-7 4.563-7 8.585 0 1.735.541 3.392 1.573 4.836L.265 22.321a.999.999 0 0 0 .733 1.68h10c5.514 0 10-4.037 10-9 0-.333-.023-.66-.063-.984H18.91z"
      fill="currentColor"
    />
    <Path
      d="M18.998 10.001h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z"
      fill="currentColor"
    />
    <Path
      d="M22.291 7.708l-5.293-5.293-5.293 5.293-1.414-1.414 6-6a.999.999 0 0 1 1.414 0l6 6-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
