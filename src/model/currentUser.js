import {createEvent, createStore, createEffect} from "effector";

export const changeCurrentUserData = createEvent();
export const clearCurrentUserData = createEvent();

export const $currentUser = createStore({})
  .on(changeCurrentUserData, (state, data) => ({...data}))
  .reset(clearCurrentUserData);

$currentUser.watch((state) => {
  console.log("currentUser", state);
});
