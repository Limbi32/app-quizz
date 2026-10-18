const espaces = [
  {
    titre: 'Pour l’enseignant',
    couleur: {
      titre: 'text-cyan-400',
      badge: 'bg-cyan-400/10 ring-cyan-400/30 text-cyan-400',
      bordure: 'hover:border-cyan-400/40 hover:shadow-cyan-500/10',
      halo: 'bg-cyan-400/10',
    },
    points: [
      'Créez vos classes, ajoutez les élèves un par un ou importez la liste.',
      'Saisissez votre programme, chapitre par chapitre.',
      'Marquez les chapitres terminés pour chaque classe.',
      'Rédigez vos QCM et classez-les par chapitre.',
      'Consultez les notes par interrogation, la moyenne de la classe et celle de chaque élève.',
    ],
  },
  {
    titre: 'Pour l’élève',
    couleur: {
      titre: 'text-emerald-400',
      badge: 'bg-emerald-400/10 ring-emerald-400/30 text-emerald-400',
      bordure: 'hover:border-emerald-400/40 hover:shadow-emerald-500/10',
      halo: 'bg-emerald-400/10',
    },
    points: [
      'Il choisit sa classe, puis son nom dans la liste : aucune faute de frappe.',
      'Il confirme « C’est bien toi ? » et commence.',
      'Les questions arrivent une par une, dans un ordre aléatoire.',
      'Il ne peut pas revenir en arrière.',
      'Sa note s’affiche tout de suite, sur le total et sur 20.',
    ],
  },
];

function Check({ className }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`mt-0.5 h-5 w-5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Espace() {
  return (
    <section className="mt-12 sm:mt-16">
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        Une app, deux espaces
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 pb-10 lg:grid-cols-2">
        {espaces.map((e) => (
          <article
            key={e.titre}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/60 to-gray-900 p-6 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${e.couleur.bordure}`}
          >
            {/* Halo décoratif au survol */}
            <div
              className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${e.couleur.halo}`}
            />

            <h3 className={`text-xl font-bold ${e.couleur.titre}`}>{e.titre}</h3>

            <ul className="mt-6 flex flex-col divide-y divide-white/10">
              {e.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 py-3 text-sm leading-relaxed text-gray-300 first:pt-0 last:pb-0 sm:text-base"
                >
                  <Check className={e.couleur.titre} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}