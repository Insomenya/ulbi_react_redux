import React from "react";
import './app.less';
import { useDispatch, useSelector } from "react-redux";
import { countSet } from "../store/repoSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";

const App = (props) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.repo.count);

    function onCountClick() {
        dispatch(countSet(5))
    }

  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
                  <Route path="/" Component={Main} />
            </Routes>
        </div>
      </BrowserRouter>
  )
};

export default App;
