import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.004h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.974 3.72C17.325 3.188 17 2.921 17 2.001c0-1.104-.897-2-2-2H8.984a1.99 1.99 0 0 0-1.984 2c0 .92-.325 1.188-.974 1.719C5.171 4.423 4 5.385 4 8.001v8c0 2.616 1.171 3.578 2.026 4.281.649.531.974.799.974 1.719 0 1.104.897 2 2 2h6.016a1.99 1.99 0 0 0 1.984-2c0-.92.325-1.188.974-1.719.855-.703 2.026-1.665 2.026-4.281v-8c0-2.616-1.171-3.578-2.026-4.281zM18 8.001v8c0 .396-.034.721-.093 1H6.093a4.812 4.812 0 0 1-.093-1v-8c0-.396.034-.721.093-1h11.814c.059.279.093.603.093 1zm-9.016-6H15c0 1.613.707 2.41 1.389 3H7.611c.682-.59 1.387-1.387 1.373-3zm6.016 20H9c0-1.613-.707-2.41-1.389-3h8.777c-.679.588-1.383 1.384-1.388 3z" />
      <path d="M16.202 11.415l-1.235-1.236-.013.013a4.357 4.357 0 0 0-5.908 0l-.013-.013-1.235 1.236a.348.348 0 0 0 0 .494l.988.989a.35.35 0 0 0 .495 0l.988-.989a.348.348 0 0 0 0-.494l-.482-.482a3.31 3.31 0 0 1 4.425 0l-.482.482a.348.348 0 0 0 0 .494l.988.989a.35.35 0 0 0 .495 0l.988-.989a.347.347 0 0 0 .001-.494z" />
      <path d="M14 13.001l1 3H9l1-3z" />
    </g>
  </svg>
);

export default SvgComponent;
