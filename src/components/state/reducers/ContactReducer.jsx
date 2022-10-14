let initialState = [
  {
    id: 0,
    name: "Mateen Nawaz",
    email: "email@gmail.com",
    contactNum: "03015167599",
  },
  {
    id: "2",
    name: "Aftab Khan",
    email: "email21@gmail.com",
    contactNum: "03324576599",
  },
  {
    id: "3",
    name: "Aamir Baloch",
    email: "email2@gmail.com",
    contactNum: "03007843054",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default contactReducer;
