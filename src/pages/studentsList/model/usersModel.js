import {createEvent, createStore, createEffect} from "effector";

import {api} from "~/api";

const token = localStorage.getItem("token");

export const fetchAllUserFx = createEffect(() => {
  return api
    .get("user/all", {
      headers: {
        authorization: token ? `${token}` : "",
      },
    })
    .then(({data}) => data)
    .catch((err) => err);
});

export const $allUserError = createStore(null).on(
  fetchAllUserFx.failData,
  (state, error) => error
);

export const $allUser = createStore(null).on(
  fetchAllUserFx.doneData,
  (state, user) => user
);

$allUser.watch((state) => {
  console.log("currentUser", state);
});
