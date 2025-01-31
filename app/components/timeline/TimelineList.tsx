import React from "react";

interface TimelineListProps {
  title: string;
  children: React.ReactNode;
}

export function TimelineList({ title, children }: TimelineListProps) {
  return (
    <div className="mx-auto max-w-4xl px-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="relative border-l border-slate-700 pl-6">
        {children}
      </div>
    </div>
  );
}
