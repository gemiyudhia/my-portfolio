import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto px-5 py-8">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element="" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
