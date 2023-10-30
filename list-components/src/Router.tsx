// Router.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import ListGroup from "./components/ListGroup";
import eduBackground from "./pages/EduBack";
import Activities from "./components/ExtraCurr";
import Hobbies from "./components/HobbiesIntr";
import Personal from "./components/PersonalDetails";
import Skills from "./components/SpecSkills";
// Import your other components/pages here

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={eduBackground} />
        <Route path="/" Component={Activities} />
        <Route path="/" Component={Hobbies} />
        <Route path="/" Component={Personal} />
        <Route path="/" Component={Skills} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
