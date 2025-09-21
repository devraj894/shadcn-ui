export default function StatCard({ title, value, icon, bgColor }) {
  return (
    <div
      className={`${bgColor} p-4 rounded-xl shadow-md flex items-center gap-4`}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-gray-700 font-medium">{title}</h3>
        <p className="text-xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );
}
