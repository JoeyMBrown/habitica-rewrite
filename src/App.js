import GlobalStyles from './CSS-Reset/GlobalStyles';
import React from 'react';
import MainPage from './pages/MainPage';
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Routes>
        <Route path="/user" element={<MainPage />}/>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
