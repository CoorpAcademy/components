import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 18H6v-4h1v-1H3v6h4zM7 15h2v2H7zM21.379 16.516l-1.189-4.758a1.001 1.001 0 0 0-.971-.758H16l-4 2H9v1h1v4H9v1h2l3 3h3c1.094 0 1.979-.91 1.997-2H15v-1h4.438c.616 0 1.197-.283 1.576-.769.38-.485.514-1.119.365-1.715z" />
    </G>
    <Path
      fill="currentColor"
      d="M1.882 7.852l-1.53-1.29A9.994 9.994 0 0 1 8.007 3a9.99 9.99 0 0 1 7.639 3.547L14.12 7.838A7.999 7.999 0 0 0 8.007 5a7.992 7.992 0 0 0-6.125 2.852z"
    />
    <Path
      fill="currentColor"
      d="M11.209 10.602A3.973 3.973 0 0 0 8.007 9a3.966 3.966 0 0 0-3.2 1.6l-1.6-1.2a6.027 6.027 0 0 1 4.8-2.4c1.905 0 3.655.876 4.802 2.401l-1.6 1.201z"
    />
  </Svg>
);

export default SvgComponent;
