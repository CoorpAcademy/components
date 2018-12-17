import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm4.459 4H16v-.459c.161.145.315.297.459.459zM14 6.35V8h-4V6.35c.627-.223 1.298-.35 2-.35s1.373.127 2 .35zM14 10v4h-4v-4h4zM8 7.541V8h-.459c.145-.162.298-.314.459-.459zM6.35 10H8v4H6.35A5.95 5.95 0 0 1 6 12c0-.702.127-1.373.35-2zm1.191 6H8v.46a6.037 6.037 0 0 1-.459-.46zM10 17.65V16h4v1.65c-.627.223-1.298.35-2 .35s-1.373-.127-2-.35zm6-1.19V16h.459a5.86 5.86 0 0 1-.459.46zM17.65 14H16v-4h1.65a5.95 5.95 0 0 1 .35 2 5.95 5.95 0 0 1-.35 2zM12 0L9 3h6zM21 9v6l3-3zM12 24l3-3H9zM3 15V9l-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
