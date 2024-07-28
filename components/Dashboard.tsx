import React from "react";
import WidgetCard from "./WidgetCard";
import RevenueChart from "./RevenueChart";
import RecentActivity from "./RecentActivity";
import TrafficChart from "./TrafficChart";
import styles from "../styles/dashboard.module.css"
const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.widgets}>
        <WidgetCard title="Total Sales" value="$120,784.02" change={9.23} />
        <WidgetCard title="Total Orders" value="28,834" change={3.25} />
        <WidgetCard title="Visitors" value="18,896" change={-8.66} />
        <WidgetCard title="Refunded" value="2,876" change={3.15} />
      </div>
      <div className={styles.charts}>
        <RevenueChart />
        <TrafficChart />
      </div>
      <RecentActivity />
    </div>
  );
};

export default Dashboard;
