
import { addPostActionCreator, updatePostTextActionCreator } from "../../../state/profileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          debugger;
          let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let onPostChange = (text) => {
            store.dispatch(updatePostTextActionCreator(text));
          };
          return (
            <MyPosts posts={state.profilePage.posts}
              addPost={addPost}
              onPostChange={onPostChange}
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText} />
          );
        }}</StoreContext.Consumer>
  );
};

export default MyPostsContainer;
