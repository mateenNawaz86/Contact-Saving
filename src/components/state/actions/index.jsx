export const addStd = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_STUDENT",
      payload: item,
    });
  };
};

export const updateStd = (item) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_STUDENT",
      payload: item,
    });
  };
};


export const deleteStd = (item) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_STUDENT",
      payload: item,
    });
  };
};
