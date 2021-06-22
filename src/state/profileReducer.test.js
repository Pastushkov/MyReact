import profileReducer, {deletePost, addPostActionCreator } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, lotus", likeCounts: 0 },
    { id: 2, message: "Hello World", likeCounts: 20 },
  ],
};

it("lenght of post should be incremented", () => {
  let action = addPostActionCreator("Testing...");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});


it("message of new post should be correnct", () => {
  let action = addPostActionCreator("Testing...");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("Testing...");
});

it("after deleting lenght of post should be decremented", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

it("after deleting lenght of post should't be decremented if id is uncorrect", () => {
  let action = deletePost(-1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});