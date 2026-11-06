import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcessScheduling from "./components/ProcessScheduling";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProcessScheduling/>} />
      </Routes>
    </div>
  );
}

export default App;
