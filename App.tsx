
import React, { useState, useMemo } from 'react';
import { INITIAL_ROBOTS } from './constants';
import { ComparisonFilters, RobotVacuum } from './types';
import RobotCard from './components/RobotCard';
import ComparisonTable from './components/ComparisonTable';
import AIAssistant from './components/AIAssistant';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const [filters, setFilters] = useState<ComparisonFilters>({
    maxPrice: 1500,
    minSuction: 0,
    mustMop: false,
    minClimbing: 0,
    search: ''
  });

  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredRobots = useMemo(() => {
    return INITIAL_ROBOTS.filter(r => {
      const matchesPrice = r.price <= filters.maxPrice;
      const matchesSuction = r.suctionPower >= filters.minSuction;
      const matchesMop = filters.mustMop ? r.canMop : true;
      const matchesClimb = r.climbingThreshold >= filters.minClimbing;
      const matchesSearch = r.brand.toLowerCase().includes(filters.search.toLowerCase()) || 
                           r.model.toLowerCase().includes(filters.search.toLowerCase());
      return matchesPrice && matchesSuction && matchesMop && matchesClimb && matchesSearch;
    });
  }, [filters]);

  const performanceData = useMemo(() => {
    return filteredRobots.map(r => ({
      name: r.model,
      suction: r.suctionPower,
      climb: r.climbingThreshold * 200, // Normalized for visual scale
      brand: r.brand
    }));
  }, [filteredRobots]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic">R</div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">RoboCompare<span className="text-blue-600">.UK</span></h1>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600">Buying Guides</a>
            <a href="#" className="hover:text-blue-600">Deals</a>
            <a href="#" className="hover:text-blue-600">About</a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Find Your Robot
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Search Model</label>
                  <input 
                    type="text" 
                    value={filters.search}
                    onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g. Roborock..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Max Price: £{filters.maxPrice}</label>
                  <input 
                    type="range" min="500" max="1500" step="50"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters(f => ({ ...f, maxPrice: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Min Suction: {filters.minSuction} Pa</label>
                  <input 
                    type="range" min="0" max="12000" step="500"
                    value={filters.minSuction}
                    onChange={(e) => setFilters(f => ({ ...f, minSuction: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Min Climb: {filters.minClimbing} mm</label>
                  <input 
                    type="range" min="15" max="25" step="1"
                    value={filters.minClimbing}
                    onChange={(e) => setFilters(f => ({ ...f, minClimbing: Number(e.target.value) }))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    filters.mustMop ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300 group-hover:border-blue-500'
                  }`}>
                    {filters.mustMop && <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                  </div>
                  <input 
                    type="checkbox" className="hidden"
                    checked={filters.mustMop}
                    onChange={(e) => setFilters(f => ({ ...f, mustMop: e.target.checked }))}
                  />
                  <span className="text-sm font-semibold text-slate-700">Must include Mopping</span>
                </label>
              </div>
            </div>

            <AIAssistant robots={INITIAL_ROBOTS} />
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Stats Visualization */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Performance Matrix</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px'}}
                    />
                    <Bar dataKey="suction" radius={[4, 4, 0, 0]} name="Suction (Pa)">
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2563eb' : '#3b82f6'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-xs text-slate-400 italic text-center">Comparing suction power across selected models. Higher is generally better for carpets.</p>
            </section>

            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">
                {filteredRobots.length} Models Found
              </h2>
              <div className="flex bg-slate-200/50 p-1 rounded-xl">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'
                  }`}
                >
                  Grid
                </button>
                <button 
                  onClick={() => setViewMode('table')}
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    viewMode === 'table' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'
                  }`}
                >
                  Table
                </button>
              </div>
            </div>

            {/* Content Display */}
            {viewMode === 'grid' ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRobots.map(r => (
                  <RobotCard key={r.id} robot={r} />
                ))}
                {filteredRobots.length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-slate-400 font-medium">No robots match your specific filters. Try broadening your search!</p>
                  </div>
                )}
              </div>
            ) : (
              <ComparisonTable robots={filteredRobots} />
            )}
          </div>

        </div>
      </main>

      <footer className="mt-20 border-t border-slate-100 pt-10 text-center text-slate-400 text-sm">
        <p>&copy; 2024 RoboCompare UK. All data updated weekly from official manufacturers.</p>
      </footer>
    </div>
  );
};

export default App;
