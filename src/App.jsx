import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <ThemeToggle />
      <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
