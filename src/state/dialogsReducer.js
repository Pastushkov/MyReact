const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andry" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Fine" },
    { id: 4, message: "Me too" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: action.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export let addMessage = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText,
  };
};

export default dialogsReducer;
