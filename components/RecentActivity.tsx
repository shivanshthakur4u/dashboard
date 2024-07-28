import React from 'react';

const recentActivityData = [
  { id: 1, customer: 'Ronald Richards', status: 'Returned', customerId: '#745A20', amount: '$12,458.20' },
  { id: 2, customer: 'Daniel Stewart', status: 'Signed up', customerId: '#721343', amount: '$120.50' },
  { id: 3, customer: 'Marvin McKinney', status: 'New Customer', customerId: '#434537', amount: '$3,258.00' },
];

const RecentActivity: React.FC = () => {
  return (
    <div className="recent-activity">
      <h3>Recent Activity</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Status</th>
            <th>Customer ID</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {recentActivityData.map((item) => (
            <tr key={item.id}>
              <td>{item.customer}</td>
              <td>{item.status}</td>
              <td>{item.customerId}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .recent-activity {
         
          padding: 20px;
          border-radius: 8px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #3a3a3a;
        }
        th {
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default RecentActivity;