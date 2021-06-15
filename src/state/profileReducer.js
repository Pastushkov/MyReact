const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, lotus", likeCounts: 0 },
    { id: 2, message: "Hello World", likeCounts: 20 },
  ],
  newPostText: "text",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likeCounts: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: text,
  };
  };

export default profileReducer;
