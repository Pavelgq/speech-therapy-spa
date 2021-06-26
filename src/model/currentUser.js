import {createEvent, createStore, createEffect} from "effector";

import {api} from "~/api";

// export const changeCurrentUserData = createEvent();
// export const clearCurrentUserData = createEvent();

// export const $currentUser = createStore({})
//   .on(changeCurrentUserData, (state, data) => ({...data}))
//   .reset(clearCurrentUserData);

// $currentUser.watch((state) => {
//   console.log("currentUser", state);
// });

const token = localStorage.getItem("token");

export const fetchCurrentUserFx = createEffect(() => {
  return api
    .get("user/custom", {
      headers: {
        authorization: token ? `${token}` : "",
      },
    })
    .then(({data}) => data)
    .catch((err) => err);
});

export const $currentUserError = createStore(null).on(
  fetchCurrentUserFx.failData,
  (state, error) => error
);

export const $currentUser = createStore(null).on(
  fetchCurrentUserFx.doneData,
  (state, user) => user
);

$currentUser.watch((state) => {
  console.log("currentUser", state);
});
