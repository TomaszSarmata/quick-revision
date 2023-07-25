import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <div className="w-1/6 bg-green-500 text-3xl rounded-md text-center">
        {number}
      </div>
      <button
        className="bg-blue-500 py-2 px-1 rounded-md mt-2 mb-2 text-white"
        onClick={handleIncrement}
      >
        click me to increment the number above!
      </button>
    </div>
  );
}
