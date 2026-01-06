// Mock users
export const USERS = [
  { id: 1, name: 'Alice Chen', color: 'bg-blue-500' },
  { id: 2, name: 'Bob Smith', color: 'bg-green-500' },
  { id: 3, name: 'Carol Davis', color: 'bg-purple-500' },
];

// Initial board data
export const INITIAL_COLUMNS = {
  todo: {
    id: 'todo',
    title: 'To Do',
    cardIds: [1, 2],
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    cardIds: [3],
  },
  done: {
    id: 'done',
    title: 'Done',
    cardIds: [4],
  },
};

export const INITIAL_CARDS = {
  1: { id: 1, title: 'Design homepage mockup', description: 'Create wireframes and high-fidelity designs', assignedTo: null },
  2: { id: 2, title: 'Set up authentication', description: 'Implement login and signup flow', assignedTo: 1 },
  3: { id: 3, title: 'Build API endpoints', description: 'Create REST API for user management', assignedTo: 2 },
  4: { id: 4, title: 'Write documentation', description: 'Document all API endpoints', assignedTo: 3 },
};
