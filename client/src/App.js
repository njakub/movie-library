import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppShell from "./components/AppShell/AppShell";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MyProfile from "./components/MyProfile/MyProfile";
import Home from "./components/Home/Home";
import Register from "./components/auth/Register";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-slate-900">
        <Router>
          <AppShell>
            <Routes>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/myProfile" element={<MyProfile />} />
              <Route exact path="/movieSearch" element={<MovieSearch />} />
              <Route exact path="/movieDetails" element={<MovieDetails />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AppShell>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
