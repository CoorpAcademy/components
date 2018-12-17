import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 10h4v4H4zM4 16h4v4H4z" />
      <Path d="M16 13.932V22H2V8h7.262A7.986 7.986 0 0 1 9 6H0v18h18V13.932c-.328.04-.661.068-1 .068s-.672-.028-1-.068z" />
      <Path d="M14 13.414A8.008 8.008 0 0 1 10.079 10H10v4h4v-.586zM10 16h4v4h-4zM24 4.286h-4.286L18 0l-1.715 4.286H12l3.708 3.13L13.714 12 18 9.166 22.285 12l-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
