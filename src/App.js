import React from 'react';
import FormikYupForm from './components/FormikYupForm';
import PorEjemplo from './components/HookEffect';
import MostrarTextoEjemplo from './components/HookState';
import Form from "./components/FormReact/Login";
import {BrowserRouter as Router,
    Switch,
    Route,     
    Link,
    NavLink
    } from "react-router-dom";

import FormCrud from "./components/HookForm";



function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>

          <NavLink to="/form" className="btn btn-dark" activeClassName= "active">
            formulario Hook
          </NavLink>

          <NavLink to="/PorEjemplo" className="btn btn-dark" activeClassName= "active">
            Por ejemplo
          </NavLink>

          <NavLink to="/ejemploTexto" className="btn btn-dark" activeClassName= "active">
            Ejemplo Texto
          </NavLink>

          <NavLink to="/FormikYup" className="btn btn-dark" activeClassName= "active">
            Formulario FormikYup
          </NavLink>

        </div>

        <hr />
        <Switch>
            <Route path="/ejemploTexto">
                <MostrarTextoEjemplo />
            </Route>

            <Route path="/form">
                <Form />
            </Route>

            <Route path="/FormikYup">
                  <FormikYupForm />
            </Route>

            <Route path="/PorEjemplo">
                <FormCrud />
            </Route>

            <Route path="/">
                pagina de inicio
            </Route>

        </Switch>

      </div>    

    </Router>

    
  );
}

export default App;