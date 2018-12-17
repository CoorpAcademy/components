import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18.207 6.207l2.5-2.5A1 1 0 0 0 20 2H9a1 1 0 0 0-1 1v2H6C3.795 5 2 6.794 2 9v7h2V9a2 2 0 0 1 2-2h1.568C6.527 9.989 4.385 17.154 6.071 21.372c.153.379.521.628.929.628h13c.408 0 .776-.249.929-.628 1.854-4.638-1.619-12.788-2.722-15.165zm-8.278.164A.999.999 0 0 0 10 6V4h7.586l-1.293 1.293a1 1 0 0 0-.188 1.154c.738 1.476 2.021 4.504 2.771 7.553h-11.1c.679-3.884 2.128-7.569 2.153-7.629zM19.271 20H7.72c-.314-1.157-.345-2.552-.214-4h11.775c.227 1.471.272 2.867-.01 4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
