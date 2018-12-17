import React from "react";
import Svg, { Path, G, Ellipse } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24.001v24.001H.001z" />
    <G fill="currentColor">
      <Path d="M12 6c-2.664 0-5 2.337-5 5 0 1.402 1 4.977 1 5v4c0 2.394 1.607 4.001 4 4.001 2.662 0 4-2.564 4-4.001 0-1.085-.37-1.919-.695-2.654-.388-.873-.58-1.36-.356-2.029C15.89 12.491 17 12.335 17 10c0-2.392-2.009-4-5-4z" />
      <Ellipse
        transform="rotate(-78.1 16.443 3.468)"
        cx={16.444}
        cy={3.468}
        rx={2.5}
        ry={1.499}
      />
      <Ellipse cx={12.5} cy={3} rx={1.5} ry={2} />
      <Ellipse cx={9} cy={4.5} rx={1} ry={1.5} />
      <Ellipse
        transform="scale(-1) rotate(69.171 9.505 -8.592)"
        cx={5.924}
        cy={6.554}
        rx={1.5}
        ry={1}
      />
    </G>
  </Svg>
);

export default SvgComponent;
