import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(!ariaLabel &&
      !alt && {
        'aria-hidden': 'true'
      })
  };
  return (
    <svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10 1.5l.001-1a1 1 0 00-.963 1.272L10 1.5zm.152 1.087l-1 .002v.006l1-.008zM8.571 5.642l.568.823.004-.002-.572-.82zm-3.071.35l.369-.929a1 1 0 00-1.353 1.106l.984-.176zm.07.782l-1 .003v.005l1-.008zM4.15 9.78l-.63-.777-.003.003.633.774zM1 10.5l.208-.978A1 1 0 000 10.503l1-.003zm9 9l.003 1-.003-1zm9-9l-1 .001v.002l1-.003zm-10.998 5h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0H7a1 1 0 00.976 1l.024-1zm0-.002v-1a1 1 0 00-1 1h1zm5.002-2h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0h-1a1 1 0 00.976 1l.024-1zm0-.002v-1a1 1 0 00-1 1h1zm-3.998-3h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0H8a1 1 0 00.976 1l.024-1zm0-.002v-1a1 1 0 00-1 1h1zm5.002-2h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0h-1a1 1 0 00.976 1l.024-1zm0-.002v-1a1 1 0 00-1 1h1zm-12.998-3h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0H0a1 1 0 00.976 1l.024-1zM1 5.5v-1a1 1 0 00-1 1h1zm5.002-4h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0H5a1 1 0 00.976 1l.024-1zM6 1.5v-1a1 1 0 00-1 1h1zm-3.998 0h1a1 1 0 00-1-1v1zm0 .002l-.024 1a1 1 0 001.024-1h-1zm-.002 0H1a1 1 0 00.976 1l.024-1zM2 1.5v-1a1 1 0 00-1 1h1zm7.038.272c.075.266.113.541.114.818l2-.005a5.023 5.023 0 00-.19-1.357l-1.924.544zm.114.823A2.691 2.691 0 018 4.822l1.144 1.64a4.691 4.691 0 002.01-3.882l-2 .015zM8.002 4.82a2.277 2.277 0 01-2.133.243l-.738 1.86a4.277 4.277 0 004.008-.458L8.002 4.82zM4.516 6.168c.035.201.054.405.054.609l2-.005c0-.32-.03-.64-.086-.955l-1.968.351zm.054.614c.007.86-.38 1.678-1.05 2.221l1.26 1.554a4.832 4.832 0 001.79-3.79l-2 .015zM3.517 9.006c-.623.509-1.466.695-2.31.516l-.415 1.956c1.38.293 2.855.005 3.99-.924L3.518 9.006zM0 10.503C.018 16.01 4.471 20.518 10.003 20.5l-.006-2c-4.41.014-7.983-3.584-7.997-8.003l-2 .006zM10.003 20.5c5.515-.018 10.015-4.48 9.997-10.003l-2 .006c.014 4.403-3.577 7.983-8.003 7.997l.006 2zM20 10.499C19.994 4.988 15.521.506 10.001.5L10 2.5c4.416.005 7.996 3.592 8.001 8.001l2-.002zM7.002 15.5v.002h2V15.5h-2zm1.024-.998h-.002l-.048 2h.002l.048-2zm.974 1V15.5H7v.002h2zM8 16.5h.002v-2H8v2zm4.002-3v.002h2V13.5h-2zm1.024-.998h-.002l-.048 2h.002l.048-2zm.974 1V13.5h-2v.002h2zm-1 .998h.002v-2H13v2zm-4.998-4v.002h2V10.5h-2zm1.024-.998h-.002l-.048 2h.002l.048-2zm.974 1V10.5H8v.002h2zM9 11.5h.002v-2H9v2zm4.002-3v.002h2V8.5h-2zm1.024-.998h-.002l-.048 2h.002l.048-2zm.974 1V8.5h-2v.002h2zM14 9.5h.002v-2H14v2zM.002 5.5v.002h2V5.5h-2zm1.024-.998h-.002l-.048 2h.002l.048-2zm.974 1V5.5H0v.002h2zM1 6.5h.002v-2H1v2zm4.002-5v.002h2V1.5h-2zM6.026.502h-.002l-.048 2h.002l.048-2zm.974 1V1.5H5v.002h2zM6 2.5h.002v-2H6v2zm-4.998-1v.002h2V1.5h-2zM2.026.502h-.002l-.048 2h.002l.048-2zm.974 1V1.5H1v.002h2zM2 2.5h.002v-2H2v2z"
        fill="#06265B"
      />
    </svg>
  );
};

export default SvgComponent;
