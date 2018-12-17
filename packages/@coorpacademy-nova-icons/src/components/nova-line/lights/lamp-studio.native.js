import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <Path
      d="M14.105 8.447l2 4a.999.999 0 0 0 1.602.26l4-4a.998.998 0 0 0-.26-1.6l-4-2a1 1 0 0 0-1.154.187L16 5.586l-1.293-1.293A1 1 0 0 0 14 4h-1V2h-2v5h-1a1 1 0 0 0-.707.293L8 8.586l-.293-.293a.997.997 0 0 0-1.154-.187l-4 2a1.001 1.001 0 0 0-.26 1.6l4 4a.999.999 0 0 0 1.602-.259l2-4a1 1 0 0 0-.188-1.154L9.414 10l1-1H11v11H6v2h12v-2h-5V6h.586l1 1-.293.293a1 1 0 0 0-.188 1.154zm-7.378 4.865l-2.039-2.038 2.115-1.057.98.98-1.056 2.115zm10.47-6.095l2.115 1.057-2.039 2.038-1.057-2.114.981-.981z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
