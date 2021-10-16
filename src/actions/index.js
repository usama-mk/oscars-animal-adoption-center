export const setUser = (pay) => {
  return {
    type: "SET_USER",
    payload: pay,
  };
};

export const setAdmin = (pay) => {
  return {
    type: "SET_ADMIN",
    payload: pay,
  };
};

export const setEditor = (pay) => {
  return {
    type: "SET_EDITOR",
    payload: pay,
  };
};

export const setAnimals = (pay) => {
  return {
    type: "SET_ANIMALS",
    payload: pay,
  };
};

export const addAnimal = (pay) => {
  return {
    type: "ADD_ANIMAL",
    payload: pay,
  };
};
