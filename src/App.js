import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">Personal Details</header>
      <body>
        <UserForm />
      </body>
    </div>
  );
}

export default App;
