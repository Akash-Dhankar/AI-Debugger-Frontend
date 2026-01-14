import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3
      bg-gray-50 dark:bg-gray-950
      border-b border-gray-200 dark:border-gray-800"
    >
      <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
        AI Debugger
      </h1>

      <button
        onClick={handleLogout}
        className="text-md font-medium text-red-500 hover:underline"
      >
        Logout
      </button>
    </nav>
  );
}
