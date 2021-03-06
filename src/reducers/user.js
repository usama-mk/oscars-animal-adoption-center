const userReducer = (
  state = {
    user: "",
    admin: "",
    editor: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_ADMIN":
      return { ...state, admin: action.payload };
    case "SET_EDITOR":
      return { ...state, editor: action.payload };
    default:
      return state;
  }
};

export default userReducer;
