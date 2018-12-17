import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M21.584 6.188a1.001 1.001 0 0 0-.9-.137c-.793.265-1.404.393-1.869.393C18.435 6.444 17.028 6 16 6c-.758 0-1.426.177-2 .474v6.25c.556.176 1.213.276 2 .276 3.643 0 6-4.458 6-6a1 1 0 0 0-.416-.812zM10 12.724v-6.25A4.304 4.304 0 0 0 8 6c-1.027 0-2.435.444-2.814.444-.465 0-1.076-.128-1.869-.393A1 1 0 0 0 2 7c0 1.542 2.357 6 6 6 .787 0 1.444-.1 2-.276z" />
      <Path d="M13 5.723c.596-.347 1-.985 1-1.723a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723V14H8v2h3v2H9v2h2v2.001h2V20h2v-2h-2v-2h3v-2h-3V5.723z" />
    </G>
  </Svg>
);

export default SvgComponent;
