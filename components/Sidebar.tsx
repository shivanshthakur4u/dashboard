"use client"
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { FaChartBar, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css';
import { usePathname } from 'next/navigation';
const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathName = usePathname();
  const toggleSidebar = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.shrunk}`}>
      <button className={styles.toggleBtn} onClick={toggleSidebar} aria-label="Toggle Sidebar">
        {isExpanded ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
      </button>
      {isExpanded && <div className={styles.logo}>Storeshop</div>}
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className={`${styles.navItem} ${pathName === item.href ? styles.active : ''}`}>
              {item.icon}
              {isExpanded && <span>{item.label}</span>}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

const menuItems = [
  { href: '/', label: 'Dashboard', icon: <FaChartBar /> },
  { href: '/settings', label: 'Settings', icon: <FaCog /> },
];

export default Sidebar;
