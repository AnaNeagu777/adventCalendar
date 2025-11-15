import { useState } from 'react';
import { DayCard } from './DayCard';
import { ActivityModal } from './ActivityModal';
import { activities } from '../data/activities';

export function AdventCalendar() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8">
        {activities.map((activity, index) => (
          <DayCard
            key={index}
            day={index + 1}
            onClick={() => setSelectedDay(index + 1)}
          />
        ))}
      </div>

      <ActivityModal
        isOpen={selectedDay !== null}
        onClose={() => setSelectedDay(null)}
        day={selectedDay}
        activity={selectedDay ? activities[selectedDay - 1] : null}
      />
    </>
  );
}
