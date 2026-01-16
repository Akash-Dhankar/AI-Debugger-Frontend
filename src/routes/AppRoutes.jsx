import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../context/AuthContext";
import Debugger from "../pages/Debugger";
import History from "../pages/History";


export default function AppRoutes() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
      path="/debug"
      element={isAuth ? <Debugger /> : <Navigate to="/login" />}
      />
      <Route
      path="/history"
      element={isAuth ? <History /> : <Navigate to="/login" />}
    />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
