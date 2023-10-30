import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import eduBackground from "../pages/EduBack";
/*
import Activities from "./components/ExtraCurr";
import Hobbies from "./components/HobbiesIntr";
import Personal from "./components/PersonalDetails";
import Skills from "./components/SpecSkills";
*/
//import { useNavigate } from "react-router-dom";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: number) => void;
}

function LIstGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const navigate = useNavigate();

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(index);
              if (index === 0) {
                <Router>
                  <Routes>
                    <Route path="../pages/EduBack" Component={eduBackground} />
                  </Routes>
                </Router>;
              } else if (index === 1) {
                console.log(item);
              } else if (index === 2) {
                console.log(item);
              } else if (index === 3) {
                console.log(item);
              } else if (index === 4) {
                <Router>
                  <Routes>
                    <Route path="../pages/EduBack" Component={eduBackground} />
                  </Routes>
                </Router>;
              } else {
                console.log("no item selected");
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default LIstGroup;
