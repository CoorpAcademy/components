import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.989 3.72c-.648-.531-.974-.799-.974-1.719 0-1.104-.897-2-2-2H9a1.99 1.99 0 0 0-1.984 2c0 .92-.325 1.188-.974 1.719-.855.703-2.026 1.665-2.026 4.281v8c0 2.616 1.171 3.578 2.026 4.281.648.531.974.799.974 1.719 0 1.104.897 2 2 2h6.016a1.99 1.99 0 0 0 1.984-2c0-.92.325-1.188.974-1.719.855-.703 2.026-1.665 2.026-4.281v-8c0-2.616-1.172-3.578-2.027-4.281zm.027 4.281v8c0 .396-.034.721-.093 1H6.108a4.812 4.812 0 0 1-.093-1v-8c0-.396.034-.721.093-1h11.814c.059.279.094.603.094 1zM9 2.001h6.016c0 1.613.707 2.41 1.389 3H7.627c.682-.59 1.387-1.387 1.373-3zm6.016 20h-6c0-1.613-.707-2.41-1.389-3h8.777c-.679.588-1.383 1.384-1.388 3z" />
      <Path d="M16.016 13.001a2 2 0 0 1-2-2v-1a2 2 0 0 0-4 0v1a2 2 0 0 1-2 2v1h8v-1zM10.293 15.001c.347.596.984 1 1.723 1s1.376-.404 1.723-1h-3.446z" />
    </G>
  </Svg>
);

export default SvgComponent;
