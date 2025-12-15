import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/home/View";
import NotFound from "./view/notfound/View";
import Success from "./view/success/View";

const App = () => {
  return (
    <Router>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
          </Routes>
    </Router>
  );
};

export default App;
