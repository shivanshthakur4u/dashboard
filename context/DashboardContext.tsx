"use client";
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface DashboardContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  dateRange: string;
  setDateRange: (range: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : true;
    }
    return true;
  });

  const [dateRange, setDateRange] = useState<string>('This Month');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      const savedRange = localStorage.getItem('dateRange');
      if (savedMode) {
        setDarkMode(JSON.parse(savedMode));
      }
      if (savedRange) {
        setDateRange(savedRange);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dateRange', dateRange);
    }
  }, [dateRange]);

  return (
    <DashboardContext.Provider value={{ darkMode, toggleDarkMode, dateRange, setDateRange }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
