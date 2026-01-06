import { createContext, useContext } from "react";

// Context for board state
const BoardContext = createContext();

 export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (!context) throw new Error('useBoardContext must be used within BoardProvider');
  return context;
};

