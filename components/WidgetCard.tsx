import React from 'react';

interface WidgetCardProps {
  title: string;
  value: string;
  change: number;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, value, change }) => {
  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <p className={`change ${change >= 0 ? 'positive' : 'negative'}`}>
        {change >= 0 ? '+' : ''}{change}% today
      </p>
      <style jsx>{`
        .widget-card {
          padding: 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        }
        h3 {
          margin-top: 0;
          color: #888;
        }
        .value {
          font-size: 24px;
          font-weight: bold;
          margin: 10px 0;
        }
        .change {
          font-size: 14px;
        }
        .positive {
          color: #4caf50;
        }
        .negative {
          color: #f44336;
        }
      `}</style>
    </div>
  );
};

export default WidgetCard;
