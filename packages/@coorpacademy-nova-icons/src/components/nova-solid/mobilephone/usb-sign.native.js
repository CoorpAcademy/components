import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.5 8c0-1.379-1.122-2.5-2.5-2.5a2.502 2.502 0 0 0-2.434 1.947L12 2.099 8.399 7.5H11V17h-1c-1.654 0-3-1.346-3-3v-.712A2.502 2.502 0 0 0 8.5 11c0-1.379-1.122-2.5-2.5-2.5S3.5 9.621 3.5 11c0 1.023.619 1.901 1.5 2.288V14c0 2.757 2.243 5 5 5h1v3h2v-7h1c2.653 0 4.809-2.083 4.969-4.695A2.505 2.505 0 0 0 20.5 8zM14 13h-1V7.5h2.551a2.497 2.497 0 0 0 1.422 2.773C16.832 11.798 15.561 13 14 13z"
    />
  </Svg>
);

export default SvgComponent;
