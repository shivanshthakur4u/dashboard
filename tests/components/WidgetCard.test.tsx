import React from 'react';
import { render, screen } from '@testing-library/react';
import WidgetCard from '@/components/WidgetCard';


describe('WidgetCard', () => {
  it('renders the title, value, and change correctly', () => {
    render(<WidgetCard title="Total Sales" value="$120,784.02" change={9.23} />);
    
    expect(screen.getByText('Total Sales')).toBeInTheDocument();
    expect(screen.getByText('$120,784.02')).toBeInTheDocument();
    expect(screen.getByText('+9.23% today')).toBeInTheDocument();
  });

  it('applies the positive class when change is positive', () => {
    render(<WidgetCard title="Total Sales" value="$120,784.02" change={9.23} />);
    
    expect(screen.getByText('+9.23% today')).toHaveClass('positive');
  });

  it('applies the negative class when change is negative', () => {
    render(<WidgetCard title="Visitors" value="18,896" change={-8.66} />);
    
    expect(screen.getByText('-8.66% today')).toHaveClass('negative');
  });
});
