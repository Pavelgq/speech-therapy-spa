import React, {useEffect} from "react";

import {useStore} from "effector-react";

import {$currentUser, $currentUserError, fetchCurrentUserFx} from "@model/currentUser";

import Loading from '@components/Loading/Loading'
import FetchError from '@components/FetchError/FetchError'

const AuthUserPanel = () => {
    const isLoading = useStore(fetchCurrentUserFx.pending);
    const error = useStore($currentUserError);
  const userData = useStore($currentUser);

  useEffect(() => {
    fetchCurrentUserFx();
  }, []);

  return (
    <div>
        {isLoading && <Loading/>}
        {error && <FetchError/>}
        {!isLoading && !error && (
            <div>
                {userData && userData.firstName}
                {userData && userData.money}
                <a href="#">{userData && userData.lastName}</a>
            </div>
        )}
    </div>
    );
};

export default AuthUserPanel