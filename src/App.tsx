import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Statistics from "./components/Statistics";
import {AppProvider} from "./AppContext";

function App() {

  return (
      <AppProvider>
          <BrowserRouter>
              <Nav />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/statistics" element={<Statistics />} />
              </Routes>
          </BrowserRouter>
      </AppProvider>
  );
}

export default App;
