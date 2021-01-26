import React from "react";
//importing Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//importing Global Style
import GlobalStyle from "./components/GlobalStyle";
//import Route
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Route path={["/", "/movie/:id"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
