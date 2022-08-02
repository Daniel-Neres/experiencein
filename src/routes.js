import React from "react";
import { Switch, Route } from "react-router-dom";
//import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profiles from "./Pages/Profiles"

export default function Routes() {
  return (
    <div>
     <Switch>
       {/* <Route exact path ="/">
         <Home />
       </Route> */}

       <Route exact path ="/">
         <Login />
       </Route>

       <Route exact path="/register">
         <Register />
       </Route>

       <Route exact path="/profiles">
         <Profiles />
       </Route>
     </Switch>
   </div>
  );
}
