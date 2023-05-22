import React from "react";

import "../App/App.css";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../contexts/TodoContext";
import { ModalProvider } from "../contexts/ModalContext";

function App() {
  return (
    <TodoProvider>
      <ModalProvider>
        <AppUi/>
      </ModalProvider>
    </TodoProvider>
  );
}

export default App;
