import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/utils/GlobalStyle";
import Home from "./components/Home";
import ListProfessors from "./components/ListProfessors";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/professors" exact>
            <ListProfessors/>
          </Route>
      </Switch> 
    </BrowserRouter>
  );
}
