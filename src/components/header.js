export default function Header() {
  return (
    <header className="m-4 flex items-center justify-between gap-3 pt-5 text-white">
      <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Quiz
        <span className="text-emerald-400">Élèves</span>
      </h1>

      <a
        href="quizz.apk"
        download
        className="shrink-0 whitespace-nowrap rounded-3xl border-2 border-gray-200/50 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-emerald-400 hover:text-emerald-400 sm:px-9 sm:text-base"
      >
        Télécharger
      </a>
    </header>
  );
}