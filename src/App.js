import React from "react";
import "./App.css";
import "./style.css";
import imageInSrc from "./images/imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="abc">
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={imageInSrc} alt="imageInSrc.jpg" />
          <br />
          <img src="./imageInPublic.jpg" alt="img" />
        </div>
        <video width="320" height="240" controls />
        <source src="myVideo.mp4" type="video/mp4" />
        <video />
      </header>
    </div>
  );
}

export default App;
