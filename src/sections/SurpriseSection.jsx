import GiftBox from "../components/GiftBox";

export default function SurpriseSection() {
  return (
    <section
      id="surprise"
      className="min-h-screen flex flex-col justify-center items-center text-white"
    >
      <h2 className="text-5xl font-bold mb-10">
        Ready For A Surprise?
      </h2>

      <GiftBox />

      <div className="mt-10">
        SurpriseButton
      </div>
    </section>
  );
}