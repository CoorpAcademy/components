import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.051.684l-.544 1.632a.997.997 0 0 1-.948.684H15v2h2.819l-1.504 9.027-5.721-2.408L9.388 8H12V6H5v2h2.279l.876 2.627A4.784 4.784 0 0 0 2 15.212 4.788 4.788 0 0 0 6.788 20h11.808a2.404 2.404 0 0 0 .933-4.619l-1.32-.556 1.642-9.848a2.995 2.995 0 0 0 2.554-2.028l.544-1.633-1.898-.632zM6.5 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM2 21h20v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
