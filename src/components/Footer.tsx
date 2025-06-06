
import { Leaf, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AgriTrack</h3>
                <p className="text-xs text-slate-400">Powered by SOLFA</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Empowering farmers across Ghana through technology, training, and sustainable agricultural practices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Farmer Profiles</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Impact Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              Email: info@solfa.org<br />
              Phone: +233 123 456 789
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>&copy; 2025 AgriTrack. Built by Jescaps Antwi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
