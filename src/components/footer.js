export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-white/10 py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        {/* Logo + slogan */}
        <div className="max-w-sm">
          <p className="text-2xl font-bold tracking-tight text-white">
            Quiz<span className="text-emerald-400">Élèves</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            L’interrogation de la classe, prête en un clic.
          </p>
        </div>

        {/* Liens */}
        <nav aria-label="Pied de page">
          <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
            <li>
              <a
                href="#espaces"
                className="text-gray-400 transition-colors hover:text-cyan-400"
              >
                Les deux espaces
              </a>
            </li>
            <li>
              <a
                href="#etapes"
                className="text-gray-400 transition-colors hover:text-cyan-400"
              >
                Comment ça marche
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton */}
        <a
          href="quizz.apk"
          download
          className="rounded-3xl bg-cyan-500 px-5 py-3 text-center text-sm font-bold text-gray-900 transition-colors hover:bg-cyan-400 md:shrink-0"
        >
          Télécharger l’app
        </a>
      </div>

      {/* Ligne du bas */}
      <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {annee} Quiz Élèves. Tous droits réservés.</p>
        <p>Application disponible sur Android (APK).</p>
      </div>
    </footer>
  );
}