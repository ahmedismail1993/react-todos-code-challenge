const storage = JSON.parse(localStorage.getItem("todos")) || [];
export const SET_TODO = (payload) => {
  storage.push(payload);
  localStorage.setItem("todos", JSON.stringify(storage));
  return {
    type: "SET_TODO",
    payload,
  };
};
export const DELETE_TODO = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  };
};
export const UPDATE_TODO = (payload) => {
  return {
    type: "UPDATE_TODO",
    payload,
  };
};
