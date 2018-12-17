import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <Path
      d="M20.857 2.071a1.001 1.001 0 0 0-1.564-.193l-17 17 1.414 1.414L9 15l3.293 3.293a.997.997 0 0 0 1.414 0c10.432-10.432 7.289-15.99 7.15-16.222zm-7.864 14.093l-2.579-2.578 8.994-8.994c.03 1.952-.873 5.804-6.415 11.572z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
