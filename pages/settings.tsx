"use client";
import Layout from '@/components/Layout';
import { useDashboard } from '@/context/DashboardContext';
import React from 'react';

const Settings: React.FC = () => {
  const { darkMode, toggleDarkMode, dateRange, setDateRange } = useDashboard();

  return (
    <Layout>
      <div className="settings">
        <h2>Settings</h2>
        <div className="setting-item">
          <label>
            Dark Mode:
            <button className={`toggle-button ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
              {darkMode ? 'ON' : 'OFF'}
            </button>
          </label>
        </div>
        <div className="setting-item">
          <label>
            Default Date Range:
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </label>
        </div>
      </div>
      <style jsx>{`
        .settings {
          padding: 20px;
          border-radius: 8px;
        }
        .setting-item {
          margin-bottom: 20px;
        }
        label {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .toggle-button {
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          background-color: #ccc;
          color: #000;
          transition: background-color 0.3s;
        }
        .toggle-button.active {
          background-color: #4caf50;
          color: #fff;
        }
      `}</style>
    </Layout>
  );
};

export default Settings;
