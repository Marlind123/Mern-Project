import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import DisplayOne from "./components/DisplayOne";
import List from "./components/List"
import PirateForm from "./components/PirateForm";
import { Link} from  "react-router-dom"
const App=()=> {
  const [model,setModel]=useState([])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/pirates" element={<List model={model} setModel={setModel} />} />
        <Route path="/pirates/new" element={ <PirateForm model={model} setModel={setModel}/>} />
        <Route path="/pirates/:id" element={<DisplayOne model={model} setModel={setModel}/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
