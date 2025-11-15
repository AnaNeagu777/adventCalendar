import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Sparkles } from 'lucide-react';

interface Activity {
  title: string;
  description: string;
  prompt: string;
}

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number | null;
  activity: Activity | null;
}

export function ActivityModal({ isOpen, onClose, day, activity }: ActivityModalProps) {
  if (!activity || !day) return null;

  const isEvenDay = day % 2 === 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="mb-4 flex items-center gap-2">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
              isEvenDay ? 'bg-green-600' : 'bg-red-600'
            }`}>
              {day}
            </div>
            <Sparkles className={isEvenDay ? 'h-5 w-5 text-green-600' : 'h-5 w-5 text-red-600'} />
          </div>
          <DialogTitle>{activity.title}</DialogTitle>
          <DialogDescription className="pt-4">
            {activity.description}
          </DialogDescription>
        </DialogHeader>

        <div className={`mt-6 rounded-lg p-6 ${
          isEvenDay ? 'bg-green-50' : 'bg-red-50'
        }`}>
          <p className="text-neutral-600">{activity.prompt}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}