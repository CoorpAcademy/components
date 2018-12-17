import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <Path
      d="M23 5c-.104 0-6.047.854-6.15.868C15.813 6.016 15 6.952 15 8H2c-1.104 0-2 .898-2 2v4c0 1.103.896 2 2 2h13c0 1.048.813 1.984 1.849 2.132.103.014 6.047.868 6.151.868a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM2 10h2v4H2v-4zm4 4v-4h9v4H6zm11 2V8c0-.219 4.782-.814 5-.847v9.694c-.219-.031-5-.627-5-.847z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
