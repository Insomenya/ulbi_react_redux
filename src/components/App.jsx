import React from "react";
import './app.less';
import { useDispatch, useSelector } from "react-redux";
import { countSet } from "../store/repoSlice";

const App = (props) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.repo.count);

    function onCountClick() {
        dispatch(countSet(5))
    }

  return (
      <div className="app">
          <button onClick={() => onCountClick()}>COUNT</button>
          <div>{count}</div>
      </div>
  )
};

export default App;
