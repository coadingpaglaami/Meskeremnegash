interface StatCardProps {
    title: string;
    value: string;
    icon: React.ComponentType<{ size?: number }>;
};
export const StatCard = ({ title, value, icon: Icon }:StatCardProps) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
        <Icon size={16} />
      </button>
    </div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);