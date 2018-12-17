import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M8.301 21.33c5.067-1.378 8.852-5.262 10.263-9.192-.873-.498-1.445-.771-2.644-1.106-1.52 4.451-5.314 7.884-10.336 8.679a9.954 9.954 0 0 0 2.717 1.619z" />
      <Path d="M9.738 11.026a11.515 11.515 0 0 0 2.218 3.743 11.495 11.495 0 0 0 2.485-4.052 11.445 11.445 0 0 0-4.703.309z" />
      <Path d="M10.859 15.79c-3.022-3.399-4.227-8.247-2.54-13.032a9.98 9.98 0 0 0-2.855 1.734 15.312 15.312 0 0 0 3.225 12.672c.747-.371 1.256-.635 2.17-1.374z" />
      <Path d="M21.999 12.048c0-.851-.118-1.672-.318-2.461-3.815-2.779-8.394-3.541-12.63-2.505l-.002.03c0 .843.098 1.669.273 2.475 4.297-1.204 9.104-.192 12.638 3.248.019-.26.039-.521.039-.787z" />
      <Path d="M9.165 5.514c3.805-.814 7.854-.337 11.601 1.725A9.996 9.996 0 0 0 12 2.049c-.633 0-1.25.066-1.85.178a11.552 11.552 0 0 0-.985 3.287zM19.845 12.982c-1.418 3.621-4.631 7.161-8.899 9.007 4.997.522 9.428-2.688 10.689-7.303a11.592 11.592 0 0 0-1.79-1.704zM7.278 17.752A16.768 16.768 0 0 1 3.693 6.484a9.955 9.955 0 0 0-1.691 5.564c0 2.388.841 4.58 2.239 6.299a11.492 11.492 0 0 0 3.037-.595z" />
    </G>
  </Svg>
);

export default SvgComponent;
