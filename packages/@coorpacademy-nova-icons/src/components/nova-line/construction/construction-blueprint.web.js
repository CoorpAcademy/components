import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      d="M21.472 3.119a.993.993 0 0 0-1.026.049l-5.392 3.594-4.429-3.543a1.002 1.002 0 0 0-1.179-.051l-6 4A1 1 0 0 0 3 8v14a1.002 1.002 0 0 0 1.554.832l5.392-3.593 4.429 3.543a1.007 1.007 0 0 0 1.18.05l6-4c.278-.186.445-.498.445-.832V4a.999.999 0 0 0-.528-.881zM5 17.5L7 16v2.798l-2 1.333V17.5zm14 .632V16h-2v3.465l-1.946 1.297L14 19.92V16h-2v2.319l-1.375-1.101a1.003 1.003 0 0 0-1.18-.05L9 17.465V14a.998.998 0 0 0-1.6-.8L5 15v-2.434l3.938-2.363L12 12.5V14h2v-2a1 1 0 0 0-.4-.8l-4-3a1.001 1.001 0 0 0-1.115-.057L5 10.234V8.535l4.946-3.297 4.429 3.543a1 1 0 0 0 1.179.05L20 5.869v3.596l-2.555 1.703A1.001 1.001 0 0 0 17 12v2h2v-1.465l1-.667v5.597l-1 .667z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
