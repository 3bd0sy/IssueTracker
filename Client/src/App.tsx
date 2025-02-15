import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddIssue from "./Pages/AddIssue";
import EditIssue from "./Pages/EditIssue";
import About from "./Pages/About";
import GuestUser from "./Pages/GuestUser";
import SavedIssue from "./Pages/SavedIssue";
import { routeType } from "./Services/types";

const ProtectedRoute = ({ isAuthenticated, children, path }: routeType) => {
  return isAuthenticated ? children : <Navigate to={path} />;
};

function App() {
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  return (
    <div className="bg-gray-700">
      <BrowserRouter>
        <Routes>
          <Route
            path="/savedissue"
            element={
              <ProtectedRoute path="/login" isAuthenticated={isAuthenticated}>
                <SavedIssue />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute path="/login" isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute path="/" isAuthenticated={!isAuthenticated}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Register"
            element={
              <ProtectedRoute path="/" isAuthenticated={!isAuthenticated}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute path="/login" isAuthenticated={isAuthenticated}>
                <AddIssue />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute path="/login" isAuthenticated={isAuthenticated}>
                <EditIssue />
              </ProtectedRoute>
            }
          />

          {/* <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/guest" element={<GuestUser />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddIssue />} />
          <Route path="/edit/:id" element={<EditIssue />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
