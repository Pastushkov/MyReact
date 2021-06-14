const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

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
  newMessageText: "message",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText };
    }
    default:
      return state;
  }
};

export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export let updateMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newText: text,
  };
};

export default dialogsReducer;
