import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Dashboard />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
