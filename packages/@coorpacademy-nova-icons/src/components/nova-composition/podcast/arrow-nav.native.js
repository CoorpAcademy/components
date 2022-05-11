import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 16 16" fill="none" {...props}>
    <G clipPath="url(#prefix__clip0_974_1961)">
      <Path
        d="M11.826 15.883l1.43-1.721a.361.361 0 00.077-.243.334.334 0 00-.113-.228L6.722 7.998l6.498-5.69a.337.337 0 00.113-.227.371.371 0 00-.076-.243L11.826.116a.321.321 0 00-.222-.115.313.313 0 00-.235.08l-8.59 7.666a.34.34 0 000 .504l8.59 7.668a.32.32 0 00.235.08.321.321 0 00.222-.116z"
        fill="#515161"
      />
    </G>
  </Svg>
);

export default SvgComponent;
