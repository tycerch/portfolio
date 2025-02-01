import React from "react";

interface TimelineListProps {
  children: React.ReactNode;
}

export function TimelineList({ children }: TimelineListProps) {
  return (
    <div className="relative">
      <div className="relative">
        {/* Vertical line: centered in the bullet column (3rem wide) */}
        <div className="absolute left-[1.5rem] top-0 bottom-0 w-0.5 bg-slate-600 z-0" />
        <div className="space-y-12 relative z-10">{children}</div>
      </div>
    </div>
  );
}
