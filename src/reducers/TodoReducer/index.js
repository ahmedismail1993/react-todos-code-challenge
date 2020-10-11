const storage = JSON.parse(localStorage.getItem("todos"));
const initial_state = {
  todoList: storage || [],
  todoItem: {},
};
const todoReducer = (state = initial_state, actions) => {
  switch (actions.type) {
    case "SET_TODO":
      return {
        ...state,
        todoList: [...state.todoList, actions.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== actions.payload.id
        ),
      };

    case "UPDATE_TODO":
      const newTodos = state.todoList.map((todo) => {
        if (todo.id === actions.payload.id) {
          todo.completed = true;
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === actions.payload.id) {
            todo.completed = true;
          }
          return {
            ...todo,
          };
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
