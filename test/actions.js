export const ADD_TODO = Symbol('ADD_TODO');
export const REMOVE_TODO = Symbol('REMOVE_TODO');
export const UPDATE_TODO = Symbol('UPDATE_TODO');
export const RANDOMISE_TODOS = Symbol('RANDOMISE_TODOS');

export function addTodo() {
  return { type: ADD_TODO };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function updateTodo(id, values) {
  return { type: UPDATE_TODO, id, ...values };
}

export function randomiseTodos() {
  return { type: RANDOMISE_TODOS };
}
