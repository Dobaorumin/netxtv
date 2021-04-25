import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/televisores">
            <Home></Home>
        </Route>
        <Route exact path="/monitores">
            <Home></Home>
        </Route>
        <Route exact path="/ordenadores">
            <Home></Home>
        </Route>
        <Route exact path="/moviles-y-tablets">
            <Home></Home>
        </Route>
        <Route exact path="/contacto">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
