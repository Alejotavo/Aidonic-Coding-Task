import PieChart from "../components/UI/pieChart";


function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center h-64">
            <PieChart />
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center h-64">
            <span className="text-lg font-semibold mb-2">Chart 2 (aquí irá el componente Chart)</span>
            {/* Aquí irá el componente Chart 2 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
