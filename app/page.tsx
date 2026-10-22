'use client';

import React, { useState } from 'react';

export default function PlacementPortal() {
  const [drives, setDrives] = useState([
    {
      id: '1',
      companyName: 'TechCorp Global',
      role: 'Software Engineer',
      date: '2026-11-15',
      branch: 'CSE / IT',
      cgpa: '7.5',
      type: 'Full-Time',
    },
  ]);

  const [form, setForm] = useState({
    companyName: '',
    role: '',
    date: '',
    branch: '',
    cgpa: '',
    type: 'Full-Time',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName || !form.role) return;
    setDrives([...drives, { id: Date.now().toString(), ...form }]);
    setForm({ companyName: '', role: '', date: '', branch: '', cgpa: '', type: 'Full-Time' });
  };

  const deleteDrive = (id: string) => {
    setDrives(drives.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Placement Drive Portal</h1>
            <p className="text-sm text-gray-500 mt-1">Manage upcoming campus drives and student eligibility.</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Active Drives</span>
            <div className="text-2xl font-bold text-blue-600">{drives.length}</div>
          </div>
        </div>

        {/* Add Drive Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Placement Drive</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className="p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Job Role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Eligible Branches"
              value={form.branch}
              onChange={(e) => setForm({ ...form, branch: e.target.value })}
              className="p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Min CGPA"
              value={form.cgpa}
              onChange={(e) => setForm({ ...form, cgpa: e.target.value })}
              className="p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="p-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Internship">Internship</option>
            </select>

            <div className="md:col-span-3 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm font-medium transition"
              >
                Add Drive
              </button>
            </div>
          </form>
        </div>

        {/* Drives List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Drives</h2>
          {drives.map((drive) => (
            <div key={drive.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-gray-900">{drive.companyName}</h3>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded font-medium border border-blue-100">
                    {drive.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 mt-1">{drive.role}</p>
                <div className="flex gap-4 mt-2 text-xs text-gray-500">
                  <span> {drive.date}</span>
                  <span> {drive.branch}</span>
                  <span> CGPA: {drive.cgpa}</span>
                </div>
              </div>
              <button
                onClick={() => deleteDrive(drive.id)}
                className="text-xs text-red-600 hover:text-red-800 font-medium px-3 py-1.5 bg-red-50 rounded border border-red-100"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}