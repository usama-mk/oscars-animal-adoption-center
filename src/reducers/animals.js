const animalsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ANIMALS":
      return action.payload;
    case "ADD_ANIMAL":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default animalsReducer;
