"use client";

export default function ProtestsPage() {
  return (
    <section className="w-full h-screen pt-16">
      <iframe
        src="https://tycerch-protests.streamlit.app/?embedded=true"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="US Civil Unrest Analysis"
      />
    </section>
  );
}