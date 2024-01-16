import React, { useState } from "react";

export default function ReactTest() {
  const [count, setCount] = useState(10);

  const handleClick = () => {
    const value = count;
    setCount(value + 1);
  };

  return (
    <div>
      {count}
      <button onClick={handleClick}>+</button>
    </div>
  );
}
