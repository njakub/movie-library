import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppShell from "./components/AppShell/AppShell";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MyProfile from "./components/MyProfile/MyProfile";
import Home from "./components/Home/Home";
import Register from "./components/auth/Register";

function App() {
  const movies = [
    {
      title: "Pulp Fiction",
      desc: "Descripition of pulp fiction, bla bla bla",
    },
  ];
  return (
    <div className="App bg-slate-900">
      <Router>
        <AppShell>
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/myProfile" element={<MyProfile />} />
            <Route exact path="/movieSearch" element={<MovieSearch />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AppShell>
      </Router>
    </div>
  );
}

export default App;
