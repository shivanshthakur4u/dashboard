"use client"
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

const Dashboard = dynamic(() => import('../components/Dashboard'), {
  loading: () => <p>Loading...</p>,
});

const Home: React.FC = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;