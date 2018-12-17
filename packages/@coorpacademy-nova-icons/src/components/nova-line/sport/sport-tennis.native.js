import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M5.828 15.344L3 18.172A2 2 0 1 0 5.828 21l2.828-2.828-.707-.708 1.647-1.646a7.332 7.332 0 0 0 4.425 1.451c2.203 0 4.399-.932 6.024-2.557 3.217-3.218 3.421-8.247.455-11.213-1.355-1.355-3.199-2.102-5.189-2.102-2.204 0-4.399.933-6.023 2.558-1.549 1.547-2.455 3.561-2.549 5.666-.08 1.778.433 3.439 1.442 4.783L6.535 16.05l-.707-.706zm2.41-5.656a6.749 6.749 0 0 1 .346-1.841l1.84 1.841-1.961 1.961a6.18 6.18 0 0 1-.225-1.961zm3.247 1.06l1.768 1.768-2.366 2.365c-.356-.222-.693-.474-.994-.774s-.56-.632-.782-.985l2.374-2.374zm1.06-1.06l2.476-2.477 1.768 1.768-2.476 2.477-1.768-1.768zm-.173 5.83l1.942-1.941 1.835 1.834a6.709 6.709 0 0 1-2.126.358 6.095 6.095 0 0 1-1.651-.251zm6.613-1.867c-.422.422-.894.78-1.392 1.083l-2.219-2.219 2.476-2.476 2.221 2.221c-.3.493-.657.963-1.086 1.391zm1.763-2.833l-1.838-1.84 1.958-1.957c.34 1.211.3 2.537-.12 3.797zm-.525-5.273l-2.374 2.373-1.767-1.768 2.366-2.365c.356.223.693.476.993.774.303.303.562.635.782.986zm-3.26-2.397L15.021 5.09l-1.835-1.835a6.698 6.698 0 0 1 2.125-.358 6.025 6.025 0 0 1 1.652.251zm-6.614 1.867c.422-.422.894-.78 1.393-1.083L13.96 6.15l-2.476 2.477-2.222-2.224a7.394 7.394 0 0 1 1.087-1.388zM19.414 17.146c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
