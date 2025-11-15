import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { AdventCalendar } from './components/AdventCalendar';

export default function App() {
  return (
    <div className="min-h-screen bg-red-50">
      <header className="border-b border-red-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-8 w-8 text-red-600" />
            <h1 className="text-red-900">Creative December</h1>
          </div>
          <p className="mt-2 text-red-800">
            24 days of creativity-bursting activities
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <AdventCalendar />
      </main>
    </div>
  );
}