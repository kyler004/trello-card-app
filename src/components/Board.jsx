import React, { useState } from "react";
import { useBoardContext } from "../hooks/useBoardContext";
import Column from "./Column";
import CardModal from "./CardModal";

const Board = () => {
  const { columns } = useBoardContext();
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-6 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Project Board</h1>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {Object.values(columns).map((column) => (
            <Column
              key={column.id}
              column={column}
              onOpenModal={setSelectedCard}
            />
          ))}
        </div>
      </div>

      {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default Board;
