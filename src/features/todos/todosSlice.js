export function todosReducer(state = [], action) {
    if (action.type === 'todo-add') {
        // ...
    }
    return state;
}

export const initialTodos = [
    {
        id: Math.random(),
        text: 'JavaScript',
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: 'React JS',
        isCompleted: false,
    },
    {
        id: Math.random(),
        text: 'Node JS',
        isCompleted: false,
    },
];