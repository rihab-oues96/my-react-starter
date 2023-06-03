import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes, { RenderRoutes } from "./routes";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>{RenderRoutes(routes)}</>
      </BrowserRouter>
    </div>
  );
}

export default App;
