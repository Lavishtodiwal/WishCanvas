import MemoryCard from "../components/MemoryCard";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="min-h-screen py-24 px-8 text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-12">
        Beautiful Memories
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </section>
  );
}