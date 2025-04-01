import React from "react";

interface TimelineItemProps {
  company: string | React.ReactElement;
  title: string;
  dateTime: string;
  description: string[] | string; // Modified to accept array of strings
  icon: React.ReactNode;
}

export function TimelineItem({
  company,
  title,
  dateTime,
  description,
  icon,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-[3rem,1fr] gap-x-4">
      <div className="flex justify-center items-center">
        <div className="w-10 h-10 bg-background-light border-2 border-highlight rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">
          {title} <span className="text-highlight">@ {company}</span>
        </h3>
        <p className="text-foreground/70 text-sm">{dateTime}</p>
        {Array.isArray(description) ? (
          <ul className="mt-2 list-disc list-inside space-y-1">
            {description.map((bullet, index) => (
              <li key={index} className="text-foreground">
                {bullet}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
