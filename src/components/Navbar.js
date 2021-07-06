import React from "react";
import { Route } from "react-router-dom";

import { Home, About, Skills, Contact } from "./index";

export default function Navbar() {
  return (
    <>
      <Route exact path="/athar" component={Home} />
      {/* <Route exact path="/athar" component={Home} /> */}
      <Route path="/athar/about" component={About} />
      <Route path="/athar/skills" component={Skills} />
      <Route path="/athar/contact" component={Contact} />
    </>
  );
}
