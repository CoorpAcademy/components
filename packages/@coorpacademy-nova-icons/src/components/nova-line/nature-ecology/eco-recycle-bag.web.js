import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 6h-3c0-2.757-2.243-5-5-5S7 3.243 7 6H4c-1.103 0-2 .896-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.104-.897-2-2-2zm-8-3c1.654 0 3 1.346 3 3H9c0-1.654 1.346-3 3-3zm2 17H4V8h16l.001 12H14z" />
      <path d="M18 18.75a.75.75 0 0 0 .624-1.166l-2-3a.75.75 0 1 0-1.248.832l1.223 1.834H14V16l-2 2 2 2v-1.25h4zM14.622 11.58l-2.026-3a.753.753 0 0 0-1.244 0l-2.195 3.258a.75.75 0 1 0 1.245.839l1.574-2.336 1.394 2.063-.896.48 2.706.822L16 11l-1.325.708c-.019-.043-.027-.088-.053-.128zM10 17.25H7.401l1.175-1.762.905.512-.756-2.726L6 14.031l1.267.717-1.891 2.836A.75.75 0 0 0 6 18.75h4a.75.75 0 0 0 0-1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
