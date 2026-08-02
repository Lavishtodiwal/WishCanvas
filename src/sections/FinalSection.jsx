import FinalMessage from '../components/FinalMessage.jsx'

function FinalSection({ data }) {
  return (
    <section id="final" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FinalMessage title={data.title} message={data.message} signature={data.signature} />
      </div>
    </section>
  )
}

export default FinalSection