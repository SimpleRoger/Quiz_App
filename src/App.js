import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import QuizSelect from "./components/QuizSelect";
import RandomQuiz from "./components/RandomQuiz";
import SignInModal from "./components/SignInModal";
import { useState } from "react";
import "./App.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    
    <div>
      <Router>
        <SignInModal isOpen={true} onRequestClose={closeModal} />
        <Routes>
          <Route path="" exact element={<QuizSelect />} />
          {/* //name params topic */}
          <Route path="/r/:topic" exact element={<RandomQuiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
