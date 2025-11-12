export const TopRoutes = () => {
  const routes = [
    { city: 'London', value: 152, color: 'bg-blue-500' },
    { city: 'Dubai', value: 102, color: 'bg-blue-500' },
    { city: 'Ethiopia', value: 301, color: 'bg-blue-500' },
    { city: 'Eritrea', value: 131, color: 'bg-blue-500' },
    { city: 'Berlin', value: 180, color: 'bg-blue-500' }
  ];
  
  const maxValue = Math.max(...routes.map(r => r.value));
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Routes</h3>
      <div className="space-y-4">
        {routes.map((route, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">{route.city}</span>
              <span className="text-gray-500">{route.value}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className={`${route.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${(route.value / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};