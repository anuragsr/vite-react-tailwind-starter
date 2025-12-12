import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center space-y-4">
      <h1 class="text-4xl font-bold text-amber-300">Vite + React + Tailwind</h1>
      <div className="card">
        <button
          className="bg-amber-300 text-amber-900 px-4 py-2 rounded-md hover:bg-amber-50 hover:text-black"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
