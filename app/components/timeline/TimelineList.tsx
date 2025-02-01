import React from "react";

interface TimelineListProps {
  title: string;
  children: React.ReactNode;
}

export function TimelineList({ title, children }: TimelineListProps) {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mb-12">{title}</h2>
      <div className="relative">
        {/* Vertical line spanning the timeline.
            The first column is 3rem wide, so its center is at 1.5rem. */}
        <div className="absolute left-[1.5rem] top-0 bottom-0 w-0.5 bg-slate-600" />
        <div className="space-y-12">{children}</div>
      </div>
    </div>
  );
}
