import { ADD_TODO, RANDOMISE_TODOS, REMOVE_TODO, REVERSE_TODOS, UPDATE_TODO } from './actions';

export function reducer(state, { type, ...values }) {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { id: Math.max(0, ...state.todos.map((t) => t.id)) + 1, title: '' }],
      };
    }
    case RANDOMISE_TODOS: {
      return {
        ...state,
        todos: state.todos.map((t) => [Math.random(), t]).sort().map(([, t]) => t),
      };
    }
    case REVERSE_TODOS: {
      return {
        ...state,
        todos: [...state.todos].reverse(),
      };
    }
    case REMOVE_TODO: {
      const { id } = values;
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== id),
      };
    }
    case UPDATE_TODO: {
      const { id } = values;
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id !== id) {
            return t;
          }
          return {
            ...t,
            ...values,
          };
        }),
      };
    }
    default:
      return state;
  }
}
