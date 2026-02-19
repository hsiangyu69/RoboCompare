
import React from 'react';
import { RobotVacuum } from '../types';

interface RobotCardProps {
  robot: RobotVacuum;
}

const RobotCard: React.FC<RobotCardProps> = ({ robot }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={robot.imageUrl} 
          alt={`${robot.brand} ${robot.model}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
          ★ {robot.rating}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{robot.brand}</p>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{robot.model}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="bg-slate-50 p-2 rounded-lg">
            <p className="text-slate-500 text-[10px] uppercase font-bold">Suction</p>
            <p className="font-semibold text-slate-800">{robot.suctionPower} Pa</p>
          </div>
          <div className="bg-slate-50 p-2 rounded-lg">
            <p className="text-slate-500 text-[10px] uppercase font-bold">Climbing</p>
            <p className="font-semibold text-slate-800">{robot.climbingThreshold}mm</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {robot.canMop && (
              <span className="bg-cyan-50 text-cyan-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Mop Included</span>
            )}
            {!robot.canMop && (
              <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Vac Only</span>
            )}
            <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{robot.batteryLife}m Battery</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">RRP</p>
            <p className="text-2xl font-bold text-slate-900">£{robot.price}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default RobotCard;
