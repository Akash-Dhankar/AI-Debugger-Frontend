import Navbar from "../components/NavBar";
import { Bug, Code2, Settings, Brain, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const userName = "Akash";
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="px-6 py-10 text-gray-900 dark:text-gray-100">

        <h2 className="text-4xl sm:text-5xl font-black mb-14 text-center">
          Welcome back,&nbsp;
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {userName}
          </span>{" "}
          👋
        </h2>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-28">

        <div className="bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl p-10 text-center flex flex-col items-center justify-center">
        <div className="w-24 h-24 flex items-center justify-center rounded-3xl bg-indigo-500/10 backdrop-blur-sm border-2 border-indigo-500/30 mb-8 shadow-lg hover:scale-105 transition-all duration-300">
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </div>
        
        <h3 className="text-3xl font-extrabold mb-4">
            Resolve an Issue
        </h3>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            Paste your error logs, code snippets, and let our AI analyze the issue
            and guide you to the right fix—faster and smarter.
        </p>

        <button
            onClick={() => navigate("/debug")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
            bg-gradient-to-r from-indigo-600 to-purple-600 text-lg font-bold text-white
            shadow-lg hover:from-indigo-700 hover:to-purple-700 active:scale-95
            transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            Resolve an Issue
            <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
            </svg>
        </button>
        </div>

        <div className="group bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-10 flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/3 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 pointer-events-none" />
            
            <div className="w-24 h-24 flex items-center justify-center rounded-3xl bg-indigo-500/10 group-hover:bg-indigo-500/20 backdrop-blur-sm border-2 border-indigo-500/30 mb-6 shadow-lg group-hover:scale-105 transition-all duration-300">
                <Clock className="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
            </div>
            
            <h3 className="text-3xl font-extrabold mb-4">
                Recent Analyses
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 px-6 leading-relaxed max-w-lg">
                Review your previous debugging sessions, AI insights, and resolution history.
            </p>
            
            <button
                onClick={() => navigate("/history")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-lg font-bold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 active:scale-95 transition-all duration-300 hover:shadow-xl"
            >
                View History
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            </div>

        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-indigo-50/10 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-900/0">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-6 bg-indigo-500/10 px-4 py-2 rounded-full inline-block max-w-max">
            Features
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 max-w-4xl mx-auto leading-tight bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent dark:from-slate-100 dark:via-indigo-400 dark:to-slate-100 drop-shadow-2xl">
            Debug Like a Pro With AI Debugger: Context-Aware AI for Modern Developers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group relative rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-white/90 dark:hover:bg-slate-800/90 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-500/10 group-hover:bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto">
                <Bug className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Precision Error Tracking
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Deploy AI for in-depth code analysis, catching elusive errors with pinpoint accuracy.
                </p>
            </div>

            <div className="group relative rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-white/90 dark:hover:bg-slate-800/90 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto">
                <Code2 className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Resolve Bugs Intelligently
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Beyond detection, receive context-aware fixes that integrate seamlessly with your workflow.
                </p>
            </div>

            <div className="group relative rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-white/90 dark:hover:bg-slate-800/90 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto">
                <Settings className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Automated AI Debugging Pipelines
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                AI proactively scans and resolves bugs—from analyzing commits to optimizing DB queries during builds.
                </p>
            </div>

            <div className="group relative rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:bg-white/90 dark:hover:bg-slate-800/90 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-500/10 group-hover:bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto">
                <Brain className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Proactive Debugging Tactics
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Gain insights into error patterns and continuously improve code quality with AI-enriched learning.
                </p>
            </div>
            </div>
        </div>
        </section>
        </main>
        </div>
    );
}
