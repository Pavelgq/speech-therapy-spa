import React from "react";

import AuthUserPanel from "@components/UserPanels/AuthUserPanel";

const Topbar = ({name}) => {
  return (
    <>
      <h2>{name}</h2>

      <AuthUserPanel />
    </>
  );
};

export default Topbar;
