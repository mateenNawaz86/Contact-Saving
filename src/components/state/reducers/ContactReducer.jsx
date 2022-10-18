let initialState = [
  {
    id: 0,
    name: "Mateen Nawaz",
    email: "email@gmail.com",
    contactNum: "03015167599",
  },
  {
    id: 1,
    name: "Aftab Khan",
    email: "email21@gmail.com",
    contactNum: "03324576599",
  },
  {
    id: 2,
    name: "Aamir Baloch",
    email: "email2@gmail.com",
    contactNum: "03007843054",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];

    case "UPDATE_STUDENT":
      const updateState = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return (state = updateState);

    case "DELETE_STUDENT":
      const deleteStd = state.filter((item) =>
        item.id !== action.payload ? item : null
      );
      return (state = deleteStd);
    default:
      return state;
  }
};

export default contactReducer;
