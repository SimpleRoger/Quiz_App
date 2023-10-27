import { Route, Router } from "react-router-dom";
import "./App.css";
import QuizSelect from "./components/QuizSelect";
// import ".index.css";
import Header from "./components/framework/Header";
import { Switch } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" to="" component={QuizSelect} ></Route>
        {/* <Header /> */}
      </Switch>
    </Router>
  );
}

export default App;
