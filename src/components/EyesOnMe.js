import React from "react";

function EyesOnMe() {
  function onFocus() {
    return console.log("Good!");
  }
  function onBlur() {
    return console.log("Hey! Eyes on me!");
  }
  return (
    <div>
      <button onFocus={onFocus} onBlur={onBlur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
