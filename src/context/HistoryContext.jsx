import { createContext, useContext, useState, useEffect } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("debug-history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("debug-history", JSON.stringify(history));
  }, [history]);

  const addAnalysis = (analysis) => {
    setHistory((prev) => [
      {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        ...analysis,
      },
      ...prev,
    ]);
  };

  return (
    <HistoryContext.Provider value={{ history, addAnalysis }}>
      {children}
    </HistoryContext.Provider>
  );
}

export const useHistory = () => useContext(HistoryContext);
