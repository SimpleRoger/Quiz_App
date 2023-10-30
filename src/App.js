import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import QuizSelect from "./components/QuizSelect";
import RandomQuiz from "./components/RandomQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" exact element={<QuizSelect />} />
        {/* //name params topic */}
        <Route path="/r/:topic" exact element={<RandomQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
