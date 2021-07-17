import React, { useContext } from "react";
import { Switch, Route } from "react-router";

import { InterestsContext } from "../contexts/interestsContext";
import { Navbar } from "../components/navbar";
import CardsContainer from "../components/cards/CardsContainer";

function Home() {
  const { interests } = useContext(InterestsContext);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/politics">
          <CardsContainer interests={["politics"]} />
        </Route>
        <Route path="/business">
          <CardsContainer interests={["business"]} />
        </Route>
        <Route path="/tech">
          <CardsContainer interests={["tech"]} />
        </Route>
        <Route path="/science">
          <CardsContainer interests={["science"]} />
        </Route>
        <Route path="/sports">
          <CardsContainer interests={["sports"]} />
        </Route>
        <Route path="/">
          <CardsContainer interests={interests} />
        </Route>
      </Switch>
    </>
  );
}

export default Home;
