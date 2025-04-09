"use client";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function ProtestsPage() {
  return (
    <section className="w-full h-[calc(100vh-80px)]">
      <iframe
        src="https://protests-gdelt-events-demo.fly.dev/?embedded=true"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="US Civil Unrest Analysis"
      />
    </section>
  );
}
