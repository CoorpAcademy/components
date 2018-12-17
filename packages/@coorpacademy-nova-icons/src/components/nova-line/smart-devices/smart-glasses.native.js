import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.006h24v24H0z" />
    <Path
      d="M21 3.001h-1v2h1c.551 0 1 .449 1 1v3H4v-3c0-.551.449-1 1-1h1v-2H5c-1.654 0-3 1.346-3 3v6h-.5a1.5 1.5 0 0 0 0 3H2v2c0 1.654 1.346 3 3 3h4.36a3.005 3.005 0 0 0 2.941-2.411l.482-2.412c.041-.205.391-.205.432 0l.482 2.411a3.007 3.007 0 0 0 2.941 2.412H21c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3zm1 14c0 .551-.449 1-1 1h-4.36c-.475 0-.887-.338-.98-.804l-.482-2.412c-.207-1.034-1.123-1.784-2.177-1.784s-1.97.75-2.177 1.784l-.482 2.413a1.002 1.002 0 0 1-.98.803H5c-.551 0-1-.449-1-1v-2h5v-3H4v-1h18v6z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
