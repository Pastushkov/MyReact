let initialState = {
    pages: [
        { page: "Profile", to: "/profile" },
        { page: "Message", to: "/dialogs" },
        { page: "News", to: "/news" },
        { page: "Music", to: "/music" },
        { page: "Settings", to: "/settings" },
      ]
};

const navBarReducer = (state=initialState, action) =>{
    return state;
}
export default navBarReducer;