import React from "react";
import BoardProvider from "./components/BoardProvider";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
