import Timeline from "../components/Timeline";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="min-h-screen py-24 px-6 text-white"
    >
      <h2 className="text-center text-5xl font-bold mb-20">
        Our Journey
      </h2>

      <Timeline />
    </section>
  );
}