export const addContact = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_CONTACT",
      payload: item,
    });
  };
};
