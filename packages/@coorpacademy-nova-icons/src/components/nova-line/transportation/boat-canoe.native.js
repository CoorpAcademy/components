import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M19.614 16.643l.771-1.285-3.4-2.042c.031-1.022-.055-2.07-.438-3.514l3.067 1.84.771-1.285-4.587-2.752c-1.207-2.922-2.906-5.089-3.016-5.229-.38-.477-1.186-.477-1.565 0-.11.14-1.809 2.307-3.016 5.229l-4.587 2.752.771 1.285 3.067-1.84c-.383 1.438-.469 2.49-.438 3.514l-3.4 2.042.771 1.285 2.791-1.674c.167.965.441 1.906.77 2.789l-4.332 2.6.771 1.285 4.147-2.488c1.165 2.529 2.583 4.342 2.684 4.468a1.005 1.005 0 0 0 1.567 0c.101-.126 1.519-1.939 2.684-4.468l4.147 2.488.771-1.285-4.332-2.6a15.71 15.71 0 0 0 .77-2.789l2.791 1.674zm-7.615 4.628C10.891 19.59 9 16.246 9 13c0-3.237 1.893-6.588 3.001-8.271C13.109 6.411 15 9.754 15 13c0 3.237-1.893 6.588-3.001 8.271z" />
      <Path d="M10 10h4v2h-4zM10 14h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
