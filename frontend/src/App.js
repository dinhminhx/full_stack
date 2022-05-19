import React from "react";
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Restautant from './pages/Restaurant'
import Add from './pages/Add'
import Edit from './pages/Edit'
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Restautant/>} />
          <Route path="/Add" element={<Add/>} />
          <Route path="/Edit/:id" element={<Edit/>} />
        </Routes>
      </Router>
  );
}

export default App;
