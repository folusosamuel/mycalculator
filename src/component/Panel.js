import React from "react";

function Panel({ a, b, c, d }) {
  return (
    <>
      <div>
        <button>{a}</button>
        <button>{b}</button>
        <button>{c}</button>
        <button>{d}</button>
      </div>
    </>
  );
}

export default Panel;
