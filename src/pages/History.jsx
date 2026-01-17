import { useHistory } from "../context/HistoryContext";
import { Clock, Code, Terminal } from "lucide-react";
import Navbar from "../components/NavBar";

export default function History() {
  const { history } = useHistory();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Clock className="w-6 h-6 text-indigo-500" />
          Recent Analyses
        </h2>

        {history.length === 0 ? (
          <p className="text-slate-500">No analyses yet.</p>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-5 bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-indigo-500">
                    {item.language.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                  <div className="flex gap-2">
                    <Terminal className="w-4 h-4 mt-1 text-emerald-500" />
                    <p className="line-clamp-3 text-slate-600 dark:text-slate-400">
                      {item.logs}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Code className="w-4 h-4 mt-1 text-indigo-500" />
                    <p className="line-clamp-3 text-slate-600 dark:text-slate-400">
                      {item.code}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
