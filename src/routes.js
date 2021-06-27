import React from "react";
// import {Switch, Route} from "react-router";
import {Switch, Route} from "react-router-dom";

import Landing from "@pages/landing/index";
import Authentication from "@pages/authentication/index";
import TeacherRoom from "@pages/personRoom/teacherRoom/index";
import StudentRoom from "@pages/personRoom/studentRoom/index";
import NotFound from "@pages/notFound/index";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Landing} exact></Route>
      <Route path="/student/:slug" component={StudentRoom} />
      <Route path="/teacher" component={TeacherRoom} />
      <Route path="/login" component={Authentication} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
