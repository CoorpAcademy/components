import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 45 44" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M5.2 1.8h12.7c.6 0 1 .4 1 1v38.3c0 .6-.4 1-1 1H5.2c-.6 0-1-.4-1-1V2.8c0-.5.4-1 1-1zM27.2 1.8h12.7c.6 0 1 .4 1 1v38.3c0 .6-.4 1-1 1H27.2c-.6 0-1-.4-1-1V2.8c0-.5.4-1 1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
