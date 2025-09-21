import SalesOverviewCard from "./BarChart";
import ActiveUsersChart from "./LineChart";
import ProductDistributionCard from "./PieChart";

export default function DashboardAnalytics() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Performance Insights
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ActiveUsersChart />
        <ProductDistributionCard />

        <div className="xl:col-span-2">
          <SalesOverviewCard />
        </div>
      </div>
    </div>
  );
}
