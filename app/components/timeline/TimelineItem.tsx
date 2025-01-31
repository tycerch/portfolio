import React from "react";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  dateTime: string;
  description: string;
  badges?: string[];
  lastItem?: boolean;
}

export function TimelineItem({
  icon,
  title,
  dateTime,
  description,
  badges,
  lastItem = false,
}: TimelineItemProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-white font-semibold">{title}</h3>
          <span className="text-sm text-slate-400">{dateTime}</span>
        </div>
      </div>
      <p className="text-slate-300 ml-14">{description}</p>
      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-2 ml-14 mt-2">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-slate-700 text-xs text-white px-2 py-1 rounded"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      {!lastItem && <div className="ml-14 border-l-2 border-slate-700 h-6 mt-2"></div>}
    </div>
  );
}
