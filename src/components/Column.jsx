import React from "react";
import { useState } from "react";
import { useBoardContext } from "../hooks/useBoardContext";
import Card from "./Card";

const Column = ({ column, onOpenModal }) => {
  const { cards, addCard } = useBoardContext();
  const [isAdding, setIsAdding] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const columnCards = column.cardIds.map((id) => cards[id]);

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      addCard(column.id, newCardTitle.trim());
      setNewCardTitle("");
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 w-80 shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">{column.title}</h2>
        <span className="text-sm text-gray-500">{columnCards.length}</span>
      </div>

      <div className="space-y-3 mb-3">
        {columnCards.map((card) => (
          <Card key={card.id} card={card} onOpenModal={onOpenModal} />
        ))}
      </div>

      {isAdding ? (
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <input
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
            placeholder="Enter card title..."
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            autoFocus
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleAddCard}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            >
              Add
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewCardTitle("");
              }}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-200 rounded transition-colors"
        >
          <Plus size={16} />
          <span className="text-sm">Add card</span>
        </button>
      )}
    </div>
  );
};

export default Column;
