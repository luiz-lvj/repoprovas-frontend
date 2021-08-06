import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/utils/GlobalStyle";
import Home from "./components/Home";
import ListProfessors from "./components/ListProfessors";
import AddTest from "./components/AddTest";
import ProfessorPage from "./components/ProfessorPage";
import TestsPage from "./components/TestsPage";
import ListSubjects from "./components/ListSubjects";
import SubjectPage from "./components/SubjectPage";
import SortedSubjectTests from "./components/SortedSubjectTests";

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
          <Route path="/subjects" exact>
            <ListSubjects/>
          </Route>
          <Route path="/newtest" exact>
            <AddTest/>
          </Route>
          <Route path="/professorpage/:profId" exact>
            <ProfessorPage/>
          </Route>
          <Route path="/sortedsubject/:subjectId" exact>
            <SortedSubjectTests/>
          </Route>
          <Route path="/subjectpage/:subjectId" exact>
            <SubjectPage/>
          </Route>
          <Route path="/tests" exact>
            <TestsPage/>
          </Route>
      </Switch> 
    </BrowserRouter>
  );
}
