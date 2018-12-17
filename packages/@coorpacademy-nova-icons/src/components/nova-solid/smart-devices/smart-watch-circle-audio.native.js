import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.141 8.035L9.766 9.461a.655.655 0 0 0-.453.623v2.779a1.313 1.313 0 0 0-.001 2.625c.724 0 1.312-.589 1.312-1.312 0-.041-.019-.075-.023-.115h.023v-3.5l3.062-.998v2.426A1.312 1.312 0 1 0 15 13.301c0-.041-.019-.075-.023-.115H15V8.658a.656.656 0 0 0-.859-.623z" />
      <Path d="M16.318 5.274L15 .002H9L7.682 5.274a7.987 7.987 0 0 0 0 13.455L9 24.002h6l1.318-5.273a7.987 7.987 0 0 0 0-13.455zM12 18.002a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
