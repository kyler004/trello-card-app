import React, { useState } from "react";
import { useBoardContext } from "../hooks/useBoardContext";
import { USERS } from "../constants/index";
import { X, User } from "lucide-react";

const CardModal = ({ card, onClose }) => {
  const { updateCard, moveCard, columns } = useBoardContext();
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [assignedTo, setAssignedTo] = useState(card.assignedTo);

  const handleSave = () => {
    updateCard(card.id, { title, description, assignedTo });
    onClose();
  };

  const currentColumn = Object.values(columns).find((col) =>
    col.cardIds.includes(card.id)
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-semibold text-gray-800 border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none flex-1 mr-4"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Assigned To
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setAssignedTo(null)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border transition-colors ${
                    assignedTo === null
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <User size={16} className="text-gray-600" />
                  </div>
                  <span className="text-sm">Unassigned</span>
                </button>
                {USERS.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => setAssignedTo(user.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg border transition-colors ${
                      assignedTo === user.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${user.color} flex items-center justify-center text-white font-semibold`}
                    >
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-sm">{user.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Move to Column
              </label>
              <div className="flex gap-2">
                {Object.values(columns).map((col) => (
                  <button
                    key={col.id}
                    onClick={() => moveCard(card.id, col.id)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      currentColumn?.id === col.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {col.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
