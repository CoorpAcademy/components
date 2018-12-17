import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6.721 12.995l2.541-7.622 1.658 2.764-1.389 4.857h2.08l1.35-4.726a.996.996 0 0 0-.104-.788l-3-5a1.007 1.007 0 0 0-.966-.479 1.003 1.003 0 0 0-.84.678l-3.52 10.562A4.927 4.927 0 0 1 6 12.995h.721zM19 4.995c-1.654 0-3 1.346-3 3v5h2v-2h1V9h-1V7.995a1.001 1.001 0 0 1 2 0v5.424a5.02 5.02 0 0 1 2 1.607V7.995c0-1.654-1.346-3-3-3z" />
      <Path d="M18 14H6c-2.205 0-4 1.792-4 3.998A4.005 4.005 0 0 0 6 22h12c2.205 0 4-1.794 4-4.002A4.003 4.003 0 0 0 18 14zm0 6H6a2.001 2.001 0 0 1 0-4.002h12A2.001 2.001 0 0 1 18 20z" />
      <Circle cx={7} cy={17.995} r={1} />
      <Circle cx={17} cy={17.995} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
