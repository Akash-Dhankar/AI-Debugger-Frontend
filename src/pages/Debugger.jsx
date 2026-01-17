import { useState } from "react";
import { Play, Code, Terminal, Brain, ChevronDown } from "lucide-react";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import { useHistory } from "../context/HistoryContext";


export default function Debugger() {
  const [language, setLanguage] = useState("javascript");
  const [logs, setLogs] = useState("");
  const [code, setCode] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async () => {
    const payload = { language, logs, code };
    setIsAnalyzing(true);
    console.log("Debugger Payload:", payload);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 bg-indigo-500/10 px-5 py-3 rounded-2xl border border-indigo-500/10 mb-6">
            <Brain className="w-5 h-5 text-indigo-500" />
            <h3 className="text-3xl font-black bg-gradient-to-r from-slate-600 via-indigo-500 to-slate-500 bg-clip-text text-transparent dark:from-slate-500 dark:via-indigo-300">
              Debug Your Issue
            </h3>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Paste error logs and code. AI will analyze context and provide intelligent fixes.
          </p>
        </div>

        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/50 dark:border-slate-800/50 rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="mb-8">
            <label className="flex items-center gap-2 mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              <Code className="w-5 h-5 text-indigo-500" />
              Programming Language
            </label>
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-lg font-mono focus:outline-none focus:ring-4 focus:ring-indigo-500/20 appearance-none"
              >
                <option value="javascript">📦 JavaScript</option>
                <option value="python">🐍 Python</option>
                <option value="java">☕ Java</option>
                <option value="cpp">⚡ C / C++</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="flex items-center gap-2 mb-3 text-lg font-semibold">
                <Terminal className="w-5 h-5 text-emerald-500" />
                Error Logs
              </label>
              <TextArea
                value={logs}
                onChange={(e) => setLogs(e.target.value)}
                className="font-mono h-72 resize-none"
                placeholder="Paste logs here..."
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-3 text-lg font-semibold">
                <Code className="w-5 h-5 text-indigo-500" />
                Code Snippet
              </label>
              <TextArea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono h-72 resize-none"
                placeholder="Paste suspicious code here..."
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
            <Button
              onClick={handleSubmit}
              disabled={isAnalyzing || !logs || !code}
              className="
                inline-flex items-center gap-3
                px-8 py-3 rounded-xl
                text-sm font-semibold
                text-indigo-600 dark:text-indigo-400
                bg-white/60 dark:bg-slate-800/60
                border border-indigo-200/50 dark:border-indigo-500/30
                backdrop-blur-sm
                hover:bg-indigo-500/10 hover:border-indigo-400
                hover:shadow-lg hover:shadow-indigo-500/10
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {isAnalyzing ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25"/>
                    <path d="M4 12a8 8 0 018-8" fill="currentColor" className="opacity-75"/>
                  </svg>
                  Analyzing…
                </>
              ) : (
                <>
                 <Play className="w-4 h-4 translate-y-[1px]" />
                  Analyze Issue
                </>
              )}
            </Button>
            <button
              onClick={() => { setLogs(""); setCode(""); }}
              className="px-6 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-500 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
