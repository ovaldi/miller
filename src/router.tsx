import history from "misc/history";
import McApp from "components/mc-app";
import Loader from "components/mc-linear";
import React, { FC, lazy, Suspense } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";

const Wrapper: FC = () => {
  return (
    <Router history={history}>
      <McApp>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import("views/home"))}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </McApp>
    </Router>
  );
};

export default Wrapper;
