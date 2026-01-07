import React, { useState } from "react";
import { USERS, INITIAL_COLUMNS, INITIAL_CARDS } from "../constants/index.js";
import { BoardContext } from "../hooks/useBoardContext";

const BoardProvider = ({ children }) => {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [nextCardId, setNextCardId] = useState(5);

  const moveCard = (cardId, targetColumnId) => {
    setColumns((prev) => {
      const newColumns = { ...prev };

      //Remove card from current column
      Object.keys(newColumns).forEach((colId) => {
        newColumns[colId] = {
          ...newColumns[colId],
          cardIds: newColumns[colId].cardIds.filter((id) => id !== cardId),
        };
      });

      //Add to target column
      newColumns[targetColumnId] = {
        ...newColumns[targetColumnId],
        cardIds: [...newColumns[targetColumnId].cardIds, cardId],
      };

      return newColumns;
    });
  };

  const updateCard = (cardId, updates) => {
    setCards((prev) => ({
      ...prev,
      [cardId]: { ...prev[cardId], ...updates },
    }));
  };

  const addCard = (columnId, title) => {
    const newCard = {
      id: nextCardId,
      title,
      description: "",
      assignedTo: null,
    };

    setCards((prev) => ({ ...prev, [nextCardId]: newCard }));
    setColumns((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        cardIds: [...prev[columnId].cardIds, nextCardId],
      },
    }));
    setNextCardId((prev) => prev + 1);
  };

  return (
    <BoardContext.Provider
      value={{ columns, cards, moveCard, addCard, updateCard }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
