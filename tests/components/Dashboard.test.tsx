import React from 'react';
import { render, screen } from '@testing-library/react';
import WidgetCard from '@/components/WidgetCard';
import RevenueChart from '@/components/RevenueChart';
import RecentActivity from '@/components/RecentActivity';
import TrafficChart from '@/components/TrafficChart';
import Dashboard from '@/components/Dashboard';


jest.mock('../../components/WidgetCard');
jest.mock('../../components/RevenueChart');
jest.mock('../../components/TrafficChart');
jest.mock('../../components/RecentActivity');

describe('Dashboard', () => {
  beforeEach(() => {
    (WidgetCard as jest.Mock).mockImplementation(({ title, value, change }) => (
      <div data-testid="widget-card">
        <h3>{title}</h3>
        <p>{value}</p>
        <p>{change}% today</p>
      </div>
    ));

    (RevenueChart as jest.Mock).mockImplementation(() => <div data-testid="revenue-chart"></div>);
    (TrafficChart as jest.Mock).mockImplementation(() => <div data-testid="traffic-chart"></div>);
    (RecentActivity as jest.Mock).mockImplementation(() => <div data-testid="recent-activity"></div>);
  });

  it('renders the dashboard components correctly', () => {
    render(<Dashboard />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getAllByTestId('widget-card')).toHaveLength(4);
    expect(screen.getByTestId('revenue-chart')).toBeInTheDocument();
    expect(screen.getByTestId('traffic-chart')).toBeInTheDocument();
    expect(screen.getByTestId('recent-activity')).toBeInTheDocument();
  });
});
