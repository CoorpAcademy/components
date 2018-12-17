import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.359v3.647h3.646A10.04 10.04 0 0 0 15 1.359zM13 .467c-.947-.299-1.955-.461-3-.461S7.947.168 7 .467v4.539h6V.467zM7 7.006h6v6H7zM19.539 7.006H15v3h5a9.95 9.95 0 0 0-.461-3zM0 10.006c0 1.045.162 2.052.461 3H5v-6H.461a9.95 9.95 0 0 0-.461 3zM13 19.545v-4.539H7v4.539c.947.299 1.955.461 3 .461s2.053-.162 3-.461zM1.354 5.006H5V1.359a10.04 10.04 0 0 0-3.646 3.647zM5 18.652v-3.646H1.354A10.037 10.037 0 0 0 5 18.652z" />
      <Path d="M17 12.006v2h3.586l-5.209 5.211c-1.606 1.619-2.766 2.789-4.377 2.789H7v2h4c2.444 0 3.998-1.566 5.797-3.381L22 15.42v3.586h2v-7h-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
