export const SenderCarrierChart = () => {
  const senderPercentage = 35;
  const carrierPercentage = 65;
  const circumference = 2 * Math.PI * 70;
  const senderLength = (senderPercentage / 100) * circumference;
  const carrierLength = (carrierPercentage / 100) * circumference;
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Sender vs Carrier</h3>
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="20"
              strokeDasharray={`${senderLength} ${circumference}`}
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="20"
              strokeDasharray={`${carrierLength} ${circumference}`}
              strokeDashoffset={-senderLength}
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <span className="text-sm text-gray-600">Sender</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-600">Carrier</span>
        </div>
      </div>
    </div>
  );
};