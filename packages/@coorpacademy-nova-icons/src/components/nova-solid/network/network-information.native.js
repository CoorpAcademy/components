import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.356v3.647h3.646A10.032 10.032 0 0 0 15 1.356zM13 11.764V7.003H7v6h4.761A8.02 8.02 0 0 1 13 11.764zM13 .464a9.98 9.98 0 0 0-6 0v4.539h6V.464zM19.986 10.262c.003-.087.014-.172.014-.259a9.954 9.954 0 0 0-.461-3H15v3.587a7.983 7.983 0 0 1 3-.587c.688 0 1.351.096 1.986.259zM0 10.003a9.95 9.95 0 0 0 .461 3H5v-6H.461a9.954 9.954 0 0 0-.461 3zM7 15.003v4.539a9.98 9.98 0 0 0 3 .461c.088 0 .172-.011.259-.012A8 8 0 0 1 10 18.003c0-1.061.211-2.073.587-3H7zM1.354 5.003H5V1.356a10.032 10.032 0 0 0-3.646 3.647zM5 18.65v-3.648H1.354A10.027 10.027 0 0 0 5 18.65zM18 12.002c-3.309 0-6 2.693-6 6 0 3.308 2.691 6 6 6 3.308 0 6-2.692 6-6 0-3.307-2.692-6-6-6zm1 10h-2v-4h2v4zm-1-4.999a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
