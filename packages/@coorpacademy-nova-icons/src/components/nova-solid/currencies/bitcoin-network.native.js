import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 11.004h1.5a.5.5 0 0 0 0-1H11v1z" />
      <Path d="M12 .004c-6.617 0-12 5.383-12 12 0 6.616 5.383 11.998 12 11.998s12-5.383 12-11.998c0-6.617-5.383-12-12-12zm8.647 7H17.58l-2.597-4.545c2.408.754 4.419 2.4 5.664 4.545zM15 13.504c0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-8h2v-1h2v1.05c1.14.233 2 1.242 2 2.45 0 .564-.195 1.081-.513 1.5.318.419.513.935.513 1.5zM11.568 2.027c.144-.007.286-.023.432-.023s.288.016.432.023l1.943 3.399c-.742-.268-1.54-.422-2.375-.422s-1.633.153-2.375.421l1.943-3.398zm-2.551.432L6.42 7.004H3.353a10.037 10.037 0 0 1 5.664-4.545zM2 12.004a9.98 9.98 0 0 1 .461-3h3.222c-.434.91-.683 1.925-.683 3s.249 2.089.683 3H2.461a9.98 9.98 0 0 1-.461-3zm1.353 5H6.42l2.597 4.544a10.04 10.04 0 0 1-5.664-4.544zm9.079 4.977c-.144.006-.286.022-.432.022s-.288-.016-.432-.022l-1.943-3.4c.743.269 1.54.423 2.375.423s1.632-.154 2.375-.423l-1.943 3.4zm2.551-.433l2.597-4.544h3.066a10.034 10.034 0 0 1-5.663 4.544zm3.334-6.544c.433-.911.683-1.925.683-3s-.25-2.09-.683-3h3.222a9.98 9.98 0 0 1 0 6h-3.222z" />
      <Path d="M12.5 13.004H11v1h1.5a.5.5 0 0 0 0-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
