import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./home";
import Acervo from "./acervo";
import reserva from "./reserva";
import contato from "./contato";
import login from "./login"


const Routes = () => {
   return(
       <BrowserRouter>
       <Switch>
           <Route component = { Home }  path="/home"/>
           <Route component = { Acervo }  path="/acervo" />
           <Route component = { reserva } path="/reserva"/>
           <Route component = { contato } path="/contato"/>
           <Route component = { login } path="/login"/>
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;