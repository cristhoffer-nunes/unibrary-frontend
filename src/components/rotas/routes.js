import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../home";
import Acervo from "../acervo/acervo";
import reserva from "../reserva";
import contato from "../contato";
import login from "../login/login"
import PrivateRoute from "../privateroute";

const Routes = () => {
   return(
       <BrowserRouter>
       <Switch>
           <PrivateRoute component = { Home } path="/home"/>
           <PrivateRoute component = { Acervo }  path="/acervo" />
           <PrivateRoute component = { reserva } path="/reserva"/>
           <PrivateRoute component = { contato } path="/contato"/>
           <Route component = { login } path="/"/>
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;