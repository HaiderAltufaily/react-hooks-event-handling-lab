import React from "react";

function Keypad() {
  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={() => console.log("Entering password...")}
      />
    </div>
  );
}

export default Keypad;
