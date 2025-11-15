interface DayCardProps {
  day: number;
  onClick: () => void;
}

export function DayCard({ day, onClick }: DayCardProps) {
  const isEvenDay = day % 2 === 0;
  
  return (
    <button
      onClick={onClick}
      className={`group aspect-square rounded-lg border-2 p-4 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isEvenDay
          ? 'border-green-600 bg-white text-green-700 hover:border-green-700 focus:ring-green-600'
          : 'border-red-600 bg-white text-red-700 hover:border-red-700 focus:ring-red-600'
      }`}
    >
      <div className="flex h-full items-center justify-center">
        <span className="transition-transform group-hover:scale-110">
          {day}
        </span>
      </div>
    </button>
  );
}