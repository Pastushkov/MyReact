const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";
let initialState = {
  users: [
/*    {
      id: 1,
      photoUrl:
        "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
      followed: true,
      fullName: "Dmitry",
      status: "my own status :)",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl:
        "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
      followed: false,
      fullName: "Vasa",
      status: "never give up",
      location: { city: "Kyiv", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl:
        "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
      followed: true,
      fullName: "Serg",
      status: "just do it :)",
      location: { city: "Moskow", country: "Russia" },
    },
    {
      id: 4,
      photoUrl:
        "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
      followed: false,
      fullName: "Andry",
      status: "This is sparta ",
      location: { city: "Dubai", country: "OAE" },
    },*/
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case SHOW_MORE:
      return {};
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
