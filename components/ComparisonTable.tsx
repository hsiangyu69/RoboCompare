
import React from 'react';
import { RobotVacuum } from '../types';

interface ComparisonTableProps {
  robots: RobotVacuum[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ robots }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50">
            <th className="p-4 font-bold text-slate-800 border-b border-slate-100 sticky left-0 bg-white z-10">Feature</th>
            {robots.map(r => (
              <th key={r.id} className="p-4 font-bold text-slate-800 border-b border-slate-100 min-w-[150px]">
                {r.brand} {r.model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 text-sm font-medium text-slate-500 border-b border-slate-50 sticky left-0 bg-white z-10">Price</td>
            {robots.map(r => <td key={r.id} className="p-4 text-sm font-bold text-slate-900 border-b border-slate-50">£{r.price}</td>)}
          </tr>
          <tr>
            <td className="p-4 text-sm font-medium text-slate-500 border-b border-slate-50 sticky left-0 bg-white z-10">Suction Power</td>
            {robots.map(r => <td key={r.id} className="p-4 text-sm text-slate-600 border-b border-slate-50">{r.suctionPower} Pa</td>)}
          </tr>
          <tr>
            <td className="p-4 text-sm font-medium text-slate-500 border-b border-slate-50 sticky left-0 bg-white z-10">Mopping</td>
            {robots.map(r => (
              <td key={r.id} className="p-4 text-sm border-b border-slate-50">
                {r.canMop ? (
                  <span className="text-green-600 font-bold">✓ Yes</span>
                ) : (
                  <span className="text-slate-300">✕ No</span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 text-sm font-medium text-slate-500 border-b border-slate-50 sticky left-0 bg-white z-10">Climb Height (Jump)</td>
            {robots.map(r => <td key={r.id} className="p-4 text-sm text-slate-600 border-b border-slate-50">{r.climbingThreshold} mm</td>)}
          </tr>
          <tr>
            <td className="p-4 text-sm font-medium text-slate-500 border-b border-slate-50 sticky left-0 bg-white z-10">Battery Runtime</td>
            {robots.map(r => <td key={r.id} className="p-4 text-sm text-slate-600 border-b border-slate-50">{r.batteryLife} mins</td>)}
          </tr>
          <tr>
            <td className="p-4 text-sm font-medium text-slate-500 border-b border-slate-50 sticky left-0 bg-white z-10">Key Features</td>
            {robots.map(r => (
              <td key={r.id} className="p-4 text-xs text-slate-600 border-b border-slate-50 align-top">
                <ul className="list-disc list-inside space-y-1">
                  {r.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
