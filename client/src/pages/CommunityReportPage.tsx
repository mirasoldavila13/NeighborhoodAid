import DashboardNav from '../components/DashboardNav';
import Footer from '../components/Footer';

const CommunityReportPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Report to Community</h1>
          <p>Feature coming soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityReportPage;
