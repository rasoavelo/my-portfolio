"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCircleH } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="relative w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl md:px-7 py-3 px-4 sm:py-5 md:py-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-background " href="#">
                <FaCircleH className="w-7 h-7 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-15 lg:h-15" />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 md:text-3xl lg:text-xl text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Accueil
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Compétences
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Projets
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 rounded-3xl border border-gray-100 px-3 py-3 flex- transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Contactez-moi
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button
                    onClick={() => setOpen(!open)}
                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  >
                    <FaBars />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4">
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link href="#" onClick={() => setOpen(false)}>
                  Accueil
                </Link>
              </li>

              <li>
                <Link href="#" onClick={() => setOpen(false)}>
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setOpen(false)}>
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setOpen(false)}>
                  Contactez-moi
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      <section className=" bg-white pt-20 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-50 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left z-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 sm:text-5xl leading-tight">
              Bonjour, je suis Hélène Développeuse Front-End & Responsable de
              projets digitaux
            </h1>

            <p className="mt-5 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Je conçois des sites web et applications modernes, performantes et
              accessibles, tout en coordonnant efficacement les projets grâce à
              la méthode Agile Scrum.
            </p>

            <div className="mt-4 m-10 flex flex-col sm:flex-row gap-6 sm:mt-6">
              <Link
                className="inline-block text-center justify-items-center rounded-3xl border bg-primary px-5 py-3 font-bold text-white"
                href="#"
              >
                Contactez-moi
              </Link>

              <Link
                className="inline-block text-center rounded-3xl border border-gray-900 px-5 py-3 font-bold text-gray-900 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Voir mon projets
              </Link>
            </div>
          </div>
          <div className="relative w-[350px] h-[350px] lg:w-[600px]  lg:h-[600px] rounded-full bg-gray-800 overflow-hidden flex ">
            <Image
              src="/S-Hero.jpeg"
              alt="Photo Hélène"
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-900 pt-5 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl dark:text-white">
              Mes compétences techniques
            </h2>

            <p className="mt-4 px-3 py-3 text-base  text-gray-800 dark:text-gray-400">
              Je crée des interfaces web modernes, performantes et accessibles,
              tout en appliquant les bonnes pratiques du développement front-end
              et la gestion de projets Agile Scrum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:text-gray-200">
                <Image src="/html-5.png" width={24} height={24} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                HTML5
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Structure sémantique pour des sites accessibles et propres.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700  dark:text-gray-200">
                <Image src="/css3.png" width={24} height={24} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                CSS3
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Mise en page responsive avec Flexbox et Grid
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700  dark:text-gray-200">
                <Image src="/js.png" width={24} height={24} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                JavaScript
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Ajouter des interactions dynamiques et efficaces.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:text-gray-200">
                <Image src="/html-5.png" width={24} height={24} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                REACT
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Développer des interfaces interactives et réactives.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:text-gray-200">
                <Image src="/html-5.png" width={24} height={24} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                NEXT.js
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Optimiser les performances et le rendu côté serveur.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700 dark:text-gray-200">
                <Image src="/html-5.png" width={24} height={24} alt="" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                EXPRESS.js
              </h3>

              <p className="mt-2 text-pretty text-gray-700 dark:text-gray-200">
                Créer des serveurs rapides et gérer les routes d’applications
                web.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche – noire */}
        <div className="bg-gray-20 text-black flex items-center justify-center px-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Mes projets</h2>
            <p className="text-gray-600 max-w-md">
              Une sélection de projets web et applications que j’ai conçus et
              développés.
            </p>
          </div>
        </div>

        {/* Colonne droite – blanche */}
        <div className="bg-white px-8 py-16 flex flex-col justify-center gap-6">
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-900">Projet 1</h3>
            <p className="text-gray-600">
              Application web développée avec React.
            </p>
          </div>

          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold text-gray-900">Projet 2</h3>
            <p className="text-gray-600">Site web performant avec Next.js.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Projet 3</h3>
            <p className="text-gray-600">
              Intégration UI responsive et moderne.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8  pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-center text-gray-500">
                © 2026.helenerasoavelo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
