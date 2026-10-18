export default function Etape() {

    return (
        <>

            <div className="flex flex-col gap-3 mt-10">
                <h1 className='text-5xl text-white font-bold'>
                    De votre programme à la note, en quatre étapes
                </h1>
                <div className=" grid grid-cols-1 gap-4  text-white sm:grid-cols-2 lg:grid-cols-4  pb-10">
                    <div className="group relative mt-5 flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/60 to-gray-900 p-6 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                        {/* Halo décoratif au survol */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

                        {/* Numéro de l'étape en badge */}
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl font-bold text-cyan-400 ring-1 ring-cyan-400/30">
                            1
                        </span>

                        <div className="space-y-1.5">
                            <h3 className="text-lg font-semibold text-white">
                                Saisissez le programme
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Collez vos chapitres, un par ligne
                            </p>
                        </div>
                    </div>

                    <div className="group relative mt-5 flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/60 to-gray-900 p-6 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                        {/* Halo décoratif au survol */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

                        {/* Numéro de l'étape en badge */}
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl font-bold text-cyan-400 ring-1 ring-cyan-400/30">
                            2
                        </span>

                        <div className="space-y-1.5">
                            <h3 className="text-lg font-semibold text-white">
                                Marquez les chapitres terminés
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Chaque classe avance à son rythme, la date est enregistrée.
                            </p>
                        </div>
                    </div>
                    <div className="group relative mt-5 flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/60 to-gray-900 p-6 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                        {/* Halo décoratif au survol */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

                        {/* Numéro de l'étape en badge */}
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl font-bold text-cyan-400 ring-1 ring-cyan-400/30">
                            3
                        </span>

                        <div className="space-y-1.5">
                            <h3 className="text-lg font-semibold text-white">
                                Générez l’interrogation
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Les questions sont tirées au hasard, réparties entre les chapitres choisis. Régénérez avant de publier si besoin.
                            </p>
                        </div>
                    </div>

                    <div className="group relative mt-5 flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/60 to-gray-900 p-6 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                        {/* Halo décoratif au survol */}
                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

                        {/* Numéro de l'étape en badge */}
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl font-bold text-cyan-400 ring-1 ring-cyan-400/30">
                            4
                        </span>

                        <div className="space-y-1.5">
                            <h3 className="text-lg font-semibold text-white">
                                Les élèves répondent
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                Une interrogation ouverte par classe, un seul passage par élève.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}