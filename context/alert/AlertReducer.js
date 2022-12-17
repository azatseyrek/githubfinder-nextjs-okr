const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        msg: action.payload.msg,
        type: action.payload.type,
      };
    case 'REMOVE_ALERT':
      return {
        msg: null,
        type: null,
      };

    default:
      return state;
  }
};

export default alertReducer;
