import React from "react";
import { Route, Switch } from "react-router-dom";

import { InterestsContextProvider } from "./contexts/interestsContext";

import Home from "./pages/Home";
import UserArea from "./pages/UserArea";

function App() {
  return (
    <div className="App pt-14 min-width">
      <InterestsContextProvider>
        <Switch>
          <Route path="/user-area">
            <UserArea />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </InterestsContextProvider>
    </div>
  );
}

export default App;
