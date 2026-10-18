export default function Hero() {
  return (
    <section className="mt-6 px-4 sm:mt-10 sm:px-0">
      <div className="flex flex-col gap-4 sm:gap-5">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
          L’interrogation de la classe, prête en un clic.
        </h1>

        <p className="mt-2 max-w-2xl text-base text-gray-400/80 sm:mt-5 sm:text-lg lg:text-xl">
          Marquez les chapitres terminés avec chaque classe. Quiz Élèves en tire
          une interrogation à choix multiples. Vos élèves répondent sur le
          téléphone et voient leur note à la fin.
        </p>

        <div className="mt-3 flex flex-col gap-3 sm:mt-5 sm:flex-row">
          <a
            href="quizz.apk"
            download
            className="rounded-3xl bg-cyan-500 px-5 py-3 text-center font-bold text-gray-900 transition-colors hover:bg-cyan-400"
          >
            Télécharger l’app
          </a>
          <button
            type="button"
            className="rounded-3xl border-2 border-gray-200/50 px-5 py-3 text-center font-bold text-cyan-50 transition-colors hover:border-cyan-400 hover:text-cyan-400"
          >
            Comment ça marche
          </button>
        </div>

        <p className="text-sm text-gray-400/80">
          Essayez une interrogation sur le téléphone.
        </p>
      </div>
    </section>
  );
}