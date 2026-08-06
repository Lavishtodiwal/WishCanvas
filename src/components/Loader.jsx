import introVideo from "../assets/intro.mp4";

function Loader({ onFinish }) {
  return (
    <section
      className="fixed inset-0 z-[9999] bg-black"
      aria-live="polite"
      aria-busy="true"
    >
      <video
    className="h-full w-full object-contain bg-black"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
      >
        <source src={introVideo} type="video/mp4" />
      </video>
    </section>
  );
}

export default Loader;