import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M20.414 12.999l-10-10c-.93-.93-2.281-1.463-3.705-1.463C5.283 1.535 3.932 2.068 3 3c-.931.931-1.465 2.281-1.465 3.706S2.069 9.482 3 10.413l10 10c.93.931 2.281 1.464 3.707 1.464 1.425 0 2.775-.533 3.707-1.464.932-.931 1.465-2.282 1.465-3.707 0-1.425-.534-2.777-1.465-3.707zM7.121 11.706l4.586-4.586 3.586 3.586-4.585 4.585-3.587-3.585zM4.414 4.415C5.586 3.243 7.828 3.241 9 4.413l1.293 1.293-4.586 4.586-1.293-1.294c-1.172-1.171-1.17-3.413 0-4.583zM19 18.998c-1.173 1.173-3.416 1.171-4.586.001l-2.292-2.292 4.586-4.585L19 14.413c1.171 1.171 1.173 3.414 0 4.585z" />
      <Circle cx={5.388} cy={5.387} r={0.75} />
      <Circle cx={5.747} cy={7.857} r={0.75} />
      <Path d="M8.398 6.266a.751.751 0 1 0-1.063-1.062.751.751 0 0 0 1.063 1.062z" />
      <Circle cx={17.409} cy={17.407} r={0.75} />
      <Circle cx={14.938} cy={17.049} r={0.75} />
      <Circle cx={17.06} cy={14.928} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
