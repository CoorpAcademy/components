import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M13.239 5.215c3.832-.444 7.318 2.303 7.768 6.137l1.986-.232c-.578-4.929-5.062-8.469-9.988-7.891-2.387.28-4.523 1.473-6.013 3.359s-2.157 4.24-1.876 6.628a5.005 5.005 0 0 0 4.963 4.417c3.056 0 5.303-2.722 4.969-5.583a2.992 2.992 0 0 0-2.313-2.564 2.98 2.98 0 0 1 .971-.299 3.005 3.005 0 0 1 3.329 2.631c.45 3.833-2.304 7.318-6.137 7.768-3.828.447-7.318-2.303-7.768-6.137l-1.986.232c.576 4.919 5.044 8.469 9.986 7.892 4.929-.579 8.468-5.059 7.89-9.989a5.008 5.008 0 0 0-5.548-4.383c-2.817.331-4.689 2.94-4.383 5.551a2.991 2.991 0 0 0 2.313 2.563 2.98 2.98 0 0 1-.971.299 3.002 3.002 0 0 1-3.329-2.631c-.218-1.856.3-3.688 1.459-5.154s2.821-2.396 4.678-2.614z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
